package com.example.cutelovers

import android.Manifest
import android.annotation.SuppressLint
import android.app.AlarmManager
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.SharedPreferences
import android.content.pm.PackageManager
import android.graphics.Color
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.os.PowerManager
import android.provider.Settings
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.ImageView
import androidx.activity.ComponentActivity
import androidx.activity.OnBackPressedCallback
import androidx.core.app.ActivityCompat
import androidx.core.app.NotificationCompat
import androidx.core.app.NotificationManagerCompat

class MainActivity : ComponentActivity() {

    private lateinit var webView: WebView
    private val notificationPermissionRequest = 1001

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // =========================
        // SPLASH SCREEN
        // =========================

        val splashView = ImageView(this).apply {
            setImageResource(R.drawable.splash_screen)
            scaleType = ImageView.ScaleType.CENTER_CROP
            setBackgroundColor(android.graphics.Color.BLACK)
        }

        setContentView(splashView)

        Handler(Looper.getMainLooper()).postDelayed({

            // =========================
            // MAIN WEBVIEW
            // =========================

            createNotificationChannel()

            webView = WebView(this)

            // FIX: WebView's default background is white, so there is a white
            // flash between the splash screen and the page finishing its render.
            // Setting this to the app's own dark background color (matches the
            // --paper variable in style.css) before attaching it removes the flash.
            webView.setBackgroundColor(Color.parseColor("#1B1420"))

            setContentView(webView)

            webView.webViewClient = WebViewClient()
            webView.webChromeClient = WebChromeClient()

            webView.addJavascriptInterface(
                AndroidNotifications(this),
                "AndroidNotifications"
            )

            webView.settings.apply {
                javaScriptEnabled = true
                domStorageEnabled = true
                databaseEnabled = true
                allowFileAccess = true
                allowContentAccess = true
                cacheMode = WebSettings.LOAD_DEFAULT
                builtInZoomControls = false
                displayZoomControls = false
                setSupportZoom(false)
            }

            webView.loadUrl("file:///android_asset/index.html")

            requestNotificationPermission()
            requestBatteryOptimizationExemption()
            requestExactAlarmPermission()

            // =========================
            // BACK BUTTON
            // =========================

            onBackPressedDispatcher.addCallback(
                this,
                object : OnBackPressedCallback(true) {
                    override fun handleOnBackPressed() {
                        if (webView.canGoBack()) {
                            webView.goBack()
                        } else {
                            finish()
                        }
                    }
                }
            )

        }, 2000) // Splash = 2 seconds
    }

    private fun requestNotificationPermission() {
        if (
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            checkSelfPermission(
                Manifest.permission.POST_NOTIFICATIONS
            ) != PackageManager.PERMISSION_GRANTED
        ) {
            ActivityCompat.requestPermissions(
                this,
                arrayOf(Manifest.permission.POST_NOTIFICATIONS),
                notificationPermissionRequest
            )
        }
    }

    // ---- NEW: Android 12+ exact alarm permission ----
    // Without this, the system can silently delay your midnight alarm by
    // minutes to hours when the phone is idle/screen off, even with data off.
    private fun requestExactAlarmPermission() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            val alarmManager = getSystemService(Context.ALARM_SERVICE) as AlarmManager
            if (!alarmManager.canScheduleExactAlarms()) {
                try {
                    val intent = Intent(
                        Settings.ACTION_REQUEST_SCHEDULE_EXACT_ALARM
                    ).apply {
                        data = Uri.parse("package:$packageName")
                    }
                    startActivity(intent)
                } catch (e: Exception) {
                    // Some OEMs don't have this screen
                }
            }
        }
    }

    private fun requestBatteryOptimizationExemption() {
        val powerManager =
            getSystemService(Context.POWER_SERVICE) as PowerManager

        if (!powerManager.isIgnoringBatteryOptimizations(packageName)) {
            try {
                val intent = Intent(
                    Settings.ACTION_REQUEST_IGNORE_BATTERY_OPTIMIZATIONS
                ).apply {
                    data = Uri.parse("package:$packageName")
                }

                startActivity(intent)

            } catch (e: Exception) {
                // Some devices don't support this screen
            }
        }
    }

    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {

            val channel = NotificationChannel(
                CHANNEL_ID,
                "Love App Reminders",
                NotificationManager.IMPORTANCE_HIGH
            ).apply {
                description = "Anniversary and birthday reminders"
            }

            getSystemService(
                NotificationManager::class.java
            ).createNotificationChannel(channel)
        }
    }

    private fun showNativeNotification(
        title: String,
        body: String,
        id: Int
    ) {

        if (
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            checkSelfPermission(
                Manifest.permission.POST_NOTIFICATIONS
            ) != PackageManager.PERMISSION_GRANTED
        ) return

        val intent = Intent(
            this,
            MainActivity::class.java
        )

        val pendingIntent = PendingIntent.getActivity(
            this,
            id,
            intent,
            PendingIntent.FLAG_UPDATE_CURRENT or
                    PendingIntent.FLAG_IMMUTABLE
        )

        val notification =
            NotificationCompat.Builder(
                this,
                CHANNEL_ID
            )
                .setSmallIcon(android.R.drawable.ic_dialog_info)
                .setContentTitle(title)
                .setContentText(body)
                .setPriority(
                    NotificationCompat.PRIORITY_HIGH
                )
                .setAutoCancel(true)
                .setContentIntent(pendingIntent)
                .build()

        NotificationManagerCompat
            .from(this)
            .notify(id, notification)
    }

    // =========================
    // JAVASCRIPT INTERFACE
    // =========================

    inner class AndroidNotifications(
        private val context: Context
    ) {

        @JavascriptInterface
        fun enableNotifications() {
            runOnUiThread {
                requestNotificationPermission()
                requestExactAlarmPermission()
            }
        }

        @JavascriptInterface
        fun showNotification(
            title: String,
            body: String,
            tag: String
        ) {

            runOnUiThread {
                showNativeNotification(
                    title,
                    body,
                    tag.hashCode()
                )
            }
        }

        @JavascriptInterface
        fun scheduleNotification(
            title: String,
            body: String,
            tag: String,
            timeMillis: Long
        ) {
            scheduleExactAlarm(context, title, body, tag, timeMillis)
            // remember it so it survives a phone restart
            saveAlarmToPrefs(context, tag, title, body, timeMillis)
        }

        @JavascriptInterface
        fun cancelNotification(tag: String) {
            cancelExactAlarm(context, tag)
            removeAlarmFromPrefs(context, tag)
        }
    }

    override fun onDestroy() {

        if (::webView.isInitialized) {
            webView.destroy()
        }

        super.onDestroy()
    }

    companion object {
        const val CHANNEL_ID = "love_app_reminders"
        const val PREFS_NAME = "reminder_alarms_prefs"

        // ---- shared alarm scheduling, used by both MainActivity and BootReceiver ----
        fun scheduleExactAlarm(
            context: Context,
            title: String,
            body: String,
            tag: String,
            timeMillis: Long
        ) {
            if (timeMillis <= System.currentTimeMillis()) return

            val alarmManager =
                context.getSystemService(Context.ALARM_SERVICE) as AlarmManager

            val intent = Intent(context, ReminderReceiver::class.java).apply {
                putExtra("title", title)
                putExtra("body", body)
                putExtra("notification_id", tag.hashCode())
            }

            val requestCode = tag.hashCode()

            val pendingIntent = PendingIntent.getBroadcast(
                context,
                requestCode,
                intent,
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
            )

            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                    if (alarmManager.canScheduleExactAlarms()) {
                        alarmManager.setExactAndAllowWhileIdle(
                            AlarmManager.RTC_WAKEUP, timeMillis, pendingIntent
                        )
                    } else {
                        // permission not granted yet — fall back so it still fires,
                        // just possibly a little late
                        alarmManager.setAndAllowWhileIdle(
                            AlarmManager.RTC_WAKEUP, timeMillis, pendingIntent
                        )
                    }
                } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                    alarmManager.setExactAndAllowWhileIdle(
                        AlarmManager.RTC_WAKEUP, timeMillis, pendingIntent
                    )
                } else {
                    alarmManager.setExact(
                        AlarmManager.RTC_WAKEUP, timeMillis, pendingIntent
                    )
                }
            } catch (e: SecurityException) {
                alarmManager.set(AlarmManager.RTC_WAKEUP, timeMillis, pendingIntent)
            }
        }

        fun cancelExactAlarm(context: Context, tag: String) {
            val alarmManager =
                context.getSystemService(Context.ALARM_SERVICE) as AlarmManager

            val intent = Intent(context, ReminderReceiver::class.java)
            val requestCode = tag.hashCode()

            val pendingIntent = PendingIntent.getBroadcast(
                context,
                requestCode,
                intent,
                PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
            )

            alarmManager.cancel(pendingIntent)
        }

        // ---- persistence so alarms survive a reboot ----
        fun saveAlarmToPrefs(
            context: Context,
            tag: String,
            title: String,
            body: String,
            timeMillis: Long
        ) {
            val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            prefs.edit()
                .putString(tag, "$title|||$body|||$timeMillis")
                .apply()
        }

        fun removeAlarmFromPrefs(context: Context, tag: String) {
            val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            prefs.edit().remove(tag).apply()
        }

        fun rescheduleAllSavedAlarms(context: Context) {
            val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            val entries = prefs.all
            val expiredTags = mutableListOf<String>()

            for ((tag, value) in entries) {
                val parts = (value as? String)?.split("|||") ?: continue
                if (parts.size != 3) continue

                val title = parts[0]
                val body = parts[1]
                val timeMillis = parts[2].toLongOrNull() ?: continue

                if (timeMillis <= System.currentTimeMillis()) {
                    expiredTags.add(tag)
                    continue
                }

                scheduleExactAlarm(context, title, body, tag, timeMillis)
            }

            if (expiredTags.isNotEmpty()) {
                val editor = prefs.edit()
                expiredTags.forEach { editor.remove(it) }
                editor.apply()
            }
        }
    }
}

// =====================================
// REMINDER RECEIVER (fires the notification)
// =====================================

class ReminderReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {

        val title = intent.getStringExtra("title") ?: "Love App"
        val body = intent.getStringExtra("body") ?: "You have a reminder 💗"
        val id = intent.getIntExtra("notification_id", title.hashCode())

        if (
            Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU &&
            context.checkSelfPermission(
                Manifest.permission.POST_NOTIFICATIONS
            ) != PackageManager.PERMISSION_GRANTED
        ) return

        val launchIntent = Intent(context, MainActivity::class.java)

        val pendingIntent = PendingIntent.getActivity(
            context,
            id,
            launchIntent,
            PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE
        )

        val notification = NotificationCompat.Builder(context, MainActivity.CHANNEL_ID)
            .setSmallIcon(android.R.drawable.ic_dialog_info)
            .setContentTitle(title)
            .setContentText(body)
            .setPriority(NotificationCompat.PRIORITY_HIGH)
            .setAutoCancel(true)
            .setContentIntent(pendingIntent)
            .build()

        NotificationManagerCompat.from(context).notify(id, notification)
    }
}

// =====================================
// BOOT RECEIVER — phone restart උනාම alarms ආයෙත් set කරනවා
// =====================================

class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (
            intent.action == Intent.ACTION_BOOT_COMPLETED ||
            intent.action == "android.intent.action.QUICKBOOT_POWERON"
        ) {
            MainActivity.rescheduleAllSavedAlarms(context)
        }
    }
}

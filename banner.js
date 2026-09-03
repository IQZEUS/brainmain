// ============================================================
//  بارگذاری فایل JS با اطمینان از دریافت نسخه جدید
// ============================================================
const FILE_VERSION = '2.0.4'; // هر بار تغییر بده
const JS_URL = `https://cdn.jsdelivr.net/gh/IQZEUS/brainmain@main/banner.js?v=${FILE_VERSION}`;

function loadBannerScript() {
    return new Promise((resolve) => {
        const oldScript = document.querySelector('script[data-banner]');
        if (oldScript) oldScript.remove();

        const script = document.createElement('script');
        script.src = JS_URL;
        script.dataset.banner = 'true';
        script.crossOrigin = 'anonymous';
        script.onload = () => {
            resolve(window.BANNER_DATA || null);
        };
        script.onerror = () => {
            // اگر خطا داشت، از کش استفاده کن
            const cached = localStorage.getItem('banner-cache');
            if (cached) {
                try { resolve(JSON.parse(cached)); } 
                catch { resolve(null); }
            } else {
                resolve(null);
            }
        };
        document.head.appendChild(script);

        // تایم‌اوت ۳ ثانیه برای جلوگیری از هنگ
        setTimeout(() => {
            if (!window.BANNER_DATA) {
                const cached = localStorage.getItem('banner-cache');
                if (cached) {
                    try { resolve(JSON.parse(cached)); } 
                    catch { resolve(null); }
                } else {
                    resolve(null);
                }
            }
        }, 3000);
    });
}

// اجرا
(async function init() {
    const data = await loadBannerScript();
    if (data) {
        localStorage.setItem('banner-cache', JSON.stringify(data));
        // رندر کن
        renderBanner(data);
    } else {
        // fallback نهایی
        renderBanner(fallbackData);
    }
})();

onload = () => {
    // الانتظار لمدة 1000 مللي ثانية (ثانية واحدة)
    const c = setTimeout(() => {
        // إزالة كلاس "not-loaded" لبدء تفتح الورود والأنيميشن
        document.body.classList.remove("not-loaded");
        
        // تنظيف الـ Timeout لضمان عدم استهلاك الذاكرة
        clearTimeout(c);
        
        console.log("Flowers have successfully bloomed!");
    }, 1000);
};

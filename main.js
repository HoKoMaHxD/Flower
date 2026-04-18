window.onload = () => {
    // الانتظار ثانية واحدة ثم إزالة كلاس not-loaded لبدء الأنيميشن
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
    
    console.log("Flowers are blooming...");
};

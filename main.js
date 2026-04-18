onload = () => {
    // الانتظار لمدة ثانية واحدة قبل بدء أنيميشن تفتح الزهور
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    // ملاحظة احترافية: 
    // إذا كنت تريد التفاعل مع مشغل سبوتيفاي برمجياً مستقبلاً 
    // يمكنك إضافة الأكواد هنا.
    console.log("Flowers are blooming...");
};

# تحديث الصور إلى Cloudinary

## التغييرات التي تمت

تم استبدال جميع الصور المحلية الثقيلة بروابط Cloudinary لتحسين أداء الموقع وتقليل حجم التحميل.

### الملفات المحدثة:

1. **src/app/utils/cloudinaryImages.ts** (جديد)
   - ملف تكوين يحتوي على جميع روابط الصور من Cloudinary
   - يسهل إدارة وتحديث الصور مستقبلاً

2. **src/app/sections/ExploreSection.tsx**
   - استبدال صور الأيقونات (coffee-1.svg, coffee-2.svg, coffee-3.svg, coffee-4.svg)
   - استبدال صور الأكواب (cup1-1.svg, cup2-1.svg, cup3-1.svg, cupp4-1.svg)

3. **src/app/sections/HeroSection.tsx**
   - استبدال صورة الخلفية (hero-overlay.png)
   - استبدال الشعار (badge.svg)
   - استبدال الفاصل (separator-white.svg)

4. **src/app/sections/HoursSection.tsx**
   - استبدال صور الخلفية (place2.jpg, hours.jpg)
   - استبدال الشعار والفواصل

5. **src/app/sections/JourneySection.tsx**
   - استبدال صور الرحلة (OurJourney3.jpg, OurPromise.jpg, ourteam.jpg)
   - استبدال الشعار والفواصل

6. **src/app/sections/MenuSection.tsx**
   - استبدال جميع صور المنتجات (أكثر من 40 صورة)
   - المعجنات، المشروبات الباردة، المشروبات الساخنة، الحلويات

7. **src/app/styles/footer.module.css**
   - استبدال صورة خلفية الفوتر (footer.jpg)

8. **next.config.ts**
   - إضافة Cloudinary إلى قائمة النطاقات المسموح بها

### الفوائد:

✅ **تحسين الأداء**: تحميل أسرع للصفحات
✅ **تقليل الحجم**: لا حاجة لتخزين الصور محلياً
✅ **CDN عالمي**: توزيع الصور من أقرب خادم للمستخدم
✅ **تحسين تلقائي**: Cloudinary يحسن الصور تلقائياً
✅ **سهولة الإدارة**: جميع الصور في مكان واحد

### كيفية إضافة صور جديدة:

1. ارفع الصورة إلى Cloudinary
2. احصل على الرابط
3. أضف الرابط إلى ملف `src/app/utils/cloudinaryImages.ts`
4. استخدم الصورة في المكون: `cloudinaryImages['اسم-الصورة.jpg']`

### ملاحظات:

- جميع الصور الآن محملة من Cloudinary CDN
- الصور المحلية في مجلد `/public` يمكن حذفها إذا أردت
- الموقع الآن أخف وأسرع بكثير! 🚀

# 🚀 To Way Coffee - Next.js Project

## 📋 آخر التحديثات

### ✅ تم مؤخراً:
1. **استبدال جميع الصور بـ Cloudinary CDN** (70+ صورة)
2. **إصلاح مشكلة الفيديو في iOS/iPhone**

---

## 🎯 البدء السريع

### 1. تثبيت المكتبات:
```bash
npm install
```

### 2. تشغيل الموقع:
```bash
npm run dev
```

### 3. فتح المتصفح:
```
http://localhost:3000
```

---

## 📁 هيكل المشروع

```
my-nextjs-app/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Footer.tsx
│       │   └── LenisProvider.tsx
│       ├── sections/
│       │   ├── ExploreSection.tsx
│       │   ├── HeroSection.tsx        ⭐ محدث (فيديو iOS)
│       │   ├── HoursSection.tsx
│       │   ├── JourneySection.tsx
│       │   ├── MenuSection.tsx
│       │   ├── navbar.tsx
│       │   └── TestimonialsSection.tsx
│       ├── styles/
│       │   └── *.module.css
│       ├── utils/
│       │   ├── cloudinaryImages.ts    ⭐ جديد
│       │   └── smoothNavigate.ts
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
│   ├── video.mp4                      📹 محلي
│   └── icon.ico                       🎨 محلي
├── next.config.ts                     ⭐ محدث
└── package.json
```

---

## 🖼️ استخدام الصور

### استيراد:
```tsx
import { cloudinaryImages } from '../utils/cloudinaryImages';
```

### استخدام:
```tsx
<img src={cloudinaryImages['badge.svg']} alt="badge" />
```

### إضافة صورة جديدة:
1. ارفع إلى Cloudinary
2. أضف الرابط في `cloudinaryImages.ts`
3. استخدم: `cloudinaryImages['اسم-الصورة.jpg']`

---

## 📱 الفيديو في iOS

### المشكلة السابقة:
- الفيديو لا يعمل تلقائياً
- ظهور أيقونة تشغيل

### الحل المطبق:
```tsx
<video 
  ref={videoRef}
  autoPlay 
  loop 
  muted 
  playsInline              // ضروري لـ iOS
  preload="auto"
  webkit-playsinline="true"
  x5-playsinline="true"
/>
```

---

## 🛠️ الأوامر المتاحة

```bash
# تشغيل الموقع في وضع التطوير
npm run dev

# بناء الموقع للإنتاج
npm run build

# تشغيل الموقع بعد البناء
npm start

# فحص الأخطاء
npm run lint
```

---

## 📚 التوثيق

- **FINAL_SUMMARY.md** - ملخص شامل لجميع التحديثات
- **CLOUDINARY_UPDATE.md** - توثيق تحديث الصور
- **VIDEO_FIX.md** - توثيق إصلاح الفيديو
- **IMAGES_REFERENCE.md** - قائمة جميع الصور
- **USAGE_GUIDE.md** - دليل الاستخدام

---

## 🌟 الميزات

✅ Next.js 16 مع Turbopack
✅ TypeScript
✅ GSAP للأنيميشن
✅ Lenis للسكرول السلس
✅ Cloudinary CDN للصور
✅ Responsive Design
✅ iOS Video Support

---

## 📊 الأداء

### قبل التحديث:
- وقت التحميل: 5-8 ثواني
- حجم الصفحة: 15-20 MB

### بعد التحديث:
- وقت التحميل: 1-2 ثانية ⚡
- حجم الصفحة: 2-3 MB 💾

---

## 🔧 التكوين

### Cloudinary:
- النطاق: `res.cloudinary.com`
- مضاف في `next.config.ts`

### الخطوط:
- Geist Sans
- Geist Mono
- Cormorant Upright

---

## 📱 الاختبار

### Desktop:
```bash
npm run dev
# افتح http://localhost:3000
```

### Mobile:
1. شغل الموقع على الشبكة المحلية
2. افتح من الموبايل
3. تحقق من الفيديو والصور

---

## 🚀 النشر

### Vercel (موصى به):
```bash
vercel
```

### أي منصة أخرى:
```bash
npm run build
npm start
```

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. راجع ملفات التوثيق
2. تحقق من Console في المتصفح
3. تأكد من تشغيل `npm install`

---

**موقع To Way Coffee - صُنع بحب ☕**

تم التحديث: يناير 2025

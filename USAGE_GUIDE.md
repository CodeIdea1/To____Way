# دليل الاستخدام السريع - Cloudinary Images

## كيفية استخدام الصور في المشروع

### 1. استيراد ملف التكوين

في أي مكون تريد استخدام الصور فيه:

```typescript
import { cloudinaryImages } from '../utils/cloudinaryImages';
```

### 2. استخدام الصور

#### في عنصر img عادي:

```tsx
<img src={cloudinaryImages['badge.svg']} alt="badge" />
```

#### في خاصية backgroundImage:

```tsx
<div style={{ backgroundImage: `url(${cloudinaryImages['footer.jpg']})` }}>
  {/* المحتوى */}
</div>
```

#### في ملفات CSS:

```css
.footer {
  background-image: url('https://res.cloudinary.com/dytwa5cro/image/upload/v1772623069/footer_fhilrn.jpg');
}
```

### 3. إضافة صورة جديدة

#### الخطوة 1: ارفع الصورة إلى Cloudinary
- اذهب إلى لوحة تحكم Cloudinary
- ارفع الصورة
- انسخ الرابط

#### الخطوة 2: أضف الرابط إلى ملف التكوين

افتح `src/app/utils/cloudinaryImages.ts` وأضف:

```typescript
export const cloudinaryImages: Record<string, string> = {
  // ... الصور الموجودة
  'new-image.jpg': 'https://res.cloudinary.com/dytwa5cro/image/upload/v1234567890/new-image_abc123.jpg',
};
```

#### الخطوة 3: استخدم الصورة

```tsx
<img src={cloudinaryImages['new-image.jpg']} alt="وصف الصورة" />
```

## أمثلة عملية

### مثال 1: صورة في قائمة الطعام

```tsx
const menuItem = {
  name: 'Latte',
  image: cloudinaryImages['Latte.jpg']
};

<img src={menuItem.image} alt={menuItem.name} />
```

### مثال 2: صورة خلفية ديناميكية

```tsx
const sections = [
  { bg: cloudinaryImages['place.jpg'] },
  { bg: cloudinaryImages['place2.jpg'] }
];

sections.map(section => (
  <div style={{ backgroundImage: `url(${section.bg})` }}>
    {/* المحتوى */}
  </div>
))
```

### مثال 3: أيقونات متعددة

```tsx
const icons = ['coffee-1.svg', 'coffee-2.svg', 'coffee-3.svg', 'coffee-4.svg'];

icons.map(icon => (
  <img src={cloudinaryImages[icon]} alt="coffee icon" />
))
```

## نصائح مهمة

✅ **استخدم دائماً** `cloudinaryImages` للصور الثابتة
✅ **تأكد من** إضافة الصورة إلى ملف التكوين أولاً
✅ **استخدم أسماء واضحة** للصور لسهولة الإدارة
✅ **احتفظ بنسخة احتياطية** من الصور المحلية قبل حذفها

❌ **لا تستخدم** مسارات محلية مباشرة مثل `/image.jpg`
❌ **لا تنسَ** تحديث `next.config.ts` عند إضافة نطاق جديد

## استكشاف الأخطاء

### الصورة لا تظهر؟

1. تحقق من أن الرابط صحيح في `cloudinaryImages.ts`
2. تحقق من أن اسم الصورة مكتوب بشكل صحيح
3. تحقق من أن Cloudinary مضاف إلى `next.config.ts`
4. أعد تشغيل خادم التطوير

### خطأ في البناء؟

```bash
# امسح الكاش وأعد البناء
rm -rf .next
npm run build
```

## الدعم

إذا واجهت أي مشكلة، راجع:
- `CLOUDINARY_UPDATE.md` - توثيق التغييرات
- `IMAGES_REFERENCE.md` - قائمة جميع الصور
- `UPDATE_SUMMARY.md` - ملخص التحديثات

---

**استمتع بموقع أسرع وأخف! 🚀**

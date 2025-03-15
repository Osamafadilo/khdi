# دليل مرجعي للواجهات البرمجية (API Reference Guide)

هذا الدليل يوثق جميع نقاط الاتصال بين الواجهة الأمامية (Frontend) والخلفية (Backend) لتسهيل عملية التعديل عند الاستضافة.

## ملاحظات هامة

- جميع مسارات API تبدأ بالمتغير البيئي `VITE_API_URL` أو تستخدم "/api" كقيمة افتراضية
- يمكن تعديل هذا المتغير في ملف `.env` أو عند الاستضافة
- في وضع التطوير (`import.meta.env.DEV`)، يتم استخدام بيانات وهمية بدلاً من الاتصال بالخادم

## ملف تكوين نقاط النهاية (API Endpoints)

جميع مسارات API معرفة في الملف: `src/lib/apiEndpoints.ts`

```typescript
// Base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

// Auth Endpoints
export const AUTH_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/users/login`,
  REGISTER: `${API_BASE_URL}/users`,
  SOCIAL_LOGIN: `${API_BASE_URL}/users/social-login`,
  PROFILE: `${API_BASE_URL}/users/profile`,
  CHANGE_PASSWORD: `${API_BASE_URL}/users/change-password`,
};

// Service Categories Endpoints
export const SERVICE_ENDPOINTS = {
  CATEGORIES: `${API_BASE_URL}/services/categories`,
  RESIDENCE: `${API_BASE_URL}/services/residence`,
  STORES: `${API_BASE_URL}/services/stores`,
  RESTAURANTS: `${API_BASE_URL}/services/restaurants`,
  MAINTENANCE: `${API_BASE_URL}/services/maintenance`,
  TRAVEL: `${API_BASE_URL}/services/travel`,
  DELIVERY: `${API_BASE_URL}/services/delivery`,
  INVESTMENT: `${API_BASE_URL}/services/investment`,
  SEARCH: `${API_BASE_URL}/services/search`,
};

// User Profile Endpoints
export const PROFILE_ENDPOINTS = {
  UPDATE_PROFILE: `${API_BASE_URL}/users/profile`,
  NOTIFICATIONS: `${API_BASE_URL}/users/notifications`,
  FAVORITES: `${API_BASE_URL}/users/favorites`,
  ORDERS: `${API_BASE_URL}/users/orders`,
  PROVIDER_SETTINGS: `${API_BASE_URL}/users/provider-settings`,
};

// Settings Endpoints
export const SETTINGS_ENDPOINTS = {
  UPDATE_SETTINGS: `${API_BASE_URL}/users/settings`,
};
```

## واجهات API المستخدمة في التطبيق

### 1. واجهات المصادقة (Authentication)

| الوظيفة | المسار | الطريقة | المعلمات | الوصف |
|---------|--------|---------|----------|-------|
| تسجيل الدخول | `/users/login` | POST | `email`, `password`, `userType` | تسجيل دخول المستخدم |
| إنشاء حساب | `/users` | POST | `name`, `email`, `password`, `userType`, `serviceType?` | تسجيل مستخدم جديد |
| تسجيل دخول اجتماعي | `/users/social-login` | POST | `email`, `name`, `userType`, `socialProvider` | تسجيل دخول باستخدام حساب اجتماعي |
| الحصول على الملف الشخصي | `/users/profile` | GET | - | الحصول على بيانات الملف الشخصي للمستخدم |
| تحديث الملف الشخصي | `/users/profile` | PUT | بيانات المستخدم | تحديث بيانات الملف الشخصي |
| تغيير كلمة المرور | `/users/change-password` | PUT | `currentPassword`, `newPassword` | تغيير كلمة مرور المستخدم |

### 2. واجهات الخدمات (Services)

| الوظيفة | المسار | الطريقة | المعلمات | الوصف |
|---------|--------|---------|----------|-------|
| الحصول على فئات الخدمات | `/services/categories` | GET | - | الحصول على جميع فئات الخدمات |
| البحث عن الخدمات | `/services/search` | GET | `query`, `category?` | البحث عن خدمات بناءً على استعلام |
| الحصول على خدمات حسب الفئة | `/services/:category` | GET | `category` (في المسار) | الحصول على خدمات فئة محددة |

### 3. واجهات الملف الشخصي (Profile)

| الوظيفة | المسار | الطريقة | المعلمات | الوصف |
|---------|--------|---------|----------|-------|
| الحصول على الإشعارات | `/users/notifications` | GET | - | الحصول على إشعارات المستخدم |
| الحصول على المفضلة | `/users/favorites` | GET | - | الحصول على العناصر المفضلة للمستخدم |
| الحصول على الطلبات | `/users/orders` | GET | - | الحصول على طلبات المستخدم |
| تحديث إعدادات مزود الخدمة | `/users/provider-settings` | PUT | بيانات المزود | تحديث إعدادات مزود الخدمة |

### 4. واجهات الإعدادات (Settings)

| الوظيفة | المسار | الطريقة | المعلمات | الوصف |
|---------|--------|---------|----------|-------|
| تحديث الإعدادات | `/users/settings` | PUT | `language?`, `direction?`, `theme?` | تحديث إعدادات المستخدم |

## مكونات الواجهة الأمامية المرتبطة بـ API

### نماذج المصادقة

- `LoginForm.tsx` - يستخدم `AUTH_ENDPOINTS.LOGIN`
- `RegisterForm.tsx` - يستخدم `AUTH_ENDPOINTS.REGISTER`
- `ChangePasswordForm.tsx` - يستخدم `AUTH_ENDPOINTS.CHANGE_PASSWORD`
- `UpdateProfileForm.tsx` - يستخدم `AUTH_ENDPOINTS.PROFILE`

### مكونات الخدمات

- `CategoryGrid.tsx` - يستخدم `SERVICE_ENDPOINTS.CATEGORIES`
- `SearchBar.tsx` - يستخدم `SERVICE_ENDPOINTS.SEARCH`
- `ServiceDetails.tsx` - يستخدم مسارات الفئات المختلفة

### مكونات الملف الشخصي

- `ProfileDropdown.tsx` - يعرض معلومات المستخدم من `AuthContext`
- `ProfileImageUploader.tsx` - يستخدم `AUTH_ENDPOINTS.PROFILE` لتحميل الصور

## واجهة برمجة التطبيق (API Client)

يوجد ملف `src/lib/apiClient.ts` الذي يوفر واجهة مبسطة للتعامل مع نقاط النهاية API:

```typescript
// Auth API functions
export const authApi = {
  login: async (email, password, userType) => { ... },
  register: async (name, email, password, userType, serviceType) => { ... },
  socialLogin: async (provider, email, name, userType) => { ... },
  getUserProfile: async () => { ... },
  updateUserProfile: async (userData) => { ... },
  changePassword: async (currentPassword, newPassword) => { ... },
  uploadProfileImage: async (file) => { ... },
};

// Service API functions
export const serviceApi = {
  getCategories: async () => { ... },
  getServicesByCategory: async (category) => { ... },
  searchServices: async (query, category) => { ... },
};

// Profile API functions
export const profileApi = {
  getNotifications: async () => { ... },
  getFavorites: async () => { ... },
  getOrders: async () => { ... },
  updateProviderSettings: async (providerData) => { ... },
};

// Settings API functions
export const settingsApi = {
  updateSettings: async (settings) => { ... },
};
```

## خطوات تعديل نقاط النهاية عند الاستضافة

1. قم بتعديل ملف `.env` لتحديد قيمة `VITE_API_URL` المناسبة للبيئة المستضافة
2. إذا تغيرت هيكلية المسارات، قم بتحديث الثوابت في ملف `src/lib/apiEndpoints.ts`
3. تأكد من أن الخادم الخلفي يستجيب على نفس المسارات المحددة في ملف النقاط النهائية

## مسارات الخادم الخلفي (Backend Routes)

### مسارات المستخدمين (`userRoutes.js`)

```javascript
router.route("/").post(registerUser);
router.post("/login", authUser);
router.post("/social-login", socialLogin);
router.route("/profile").get(protect, getUserProfile).put(protect, updateUserProfile);
router.put("/change-password", protect, changePassword);
```

### مسارات الخدمات (`serviceRoutes.js`)

```javascript
router.get("/categories", getServiceCategories);
router.get("/search", searchServices);
router.get("/:category", getServicesByCategory);
```

## ملاحظات إضافية

- جميع طلبات API التي تتطلب مصادقة تستخدم رمز JWT في رأس `Authorization`
- في وضع التطوير، يتم استخدام بيانات وهمية بدلاً من الاتصال بالخادم الفعلي
- يمكن تعديل البيانات الوهمية في ملفات السياق المناسبة مثل `AuthContext.tsx`

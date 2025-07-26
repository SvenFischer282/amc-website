# Legal Compliance Checklist - AMC Breakky Website

## ✅ **IMPLEMENTED COMPLIANCE FEATURES**

### 1. **Privacy Policy (GDPR Compliance)**

- ✅ Comprehensive privacy policy in Slovak
- ✅ GDPR-compliant data processing information
- ✅ User rights explanation (access, correction, deletion, etc.)
- ✅ Data retention periods
- ✅ Contact information for data protection queries
- ✅ Legal basis for data processing
- ✅ Third-party data sharing information

### 2. **Terms of Service**

- ✅ Comprehensive terms of service in Slovak
- ✅ Business registration information
- ✅ Intellectual property rights
- ✅ Limitation of liability
- ✅ Dispute resolution procedures
- ✅ Restaurant-specific terms (reservations, food service)
- ✅ Links to privacy policy and cookies policy

### 3. **Cookie Policy & Consent**

- ✅ Detailed cookie policy in Slovak
- ✅ Cookie consent banner (GDPR compliant)
- ✅ Granular cookie preferences (necessary, functional, analytics, marketing)
- ✅ Cookie management instructions
- ✅ Third-party cookie information
- ✅ Consent withdrawal mechanism

### 4. **Business Information**

- ✅ Company name and address
- ✅ Contact information (email, phone)
- ✅ Business registration number (IČO) placeholder
- ✅ Tax identification number (DIČ) placeholder
- ✅ Restaurant license information placeholder

### 5. **Technical Compliance**

- ✅ Proper HTML meta tags
- ✅ Language specification (sk)
- ✅ Robots meta tag
- ✅ Open Graph tags for social media
- ✅ Twitter Card meta tags
- ✅ Responsive design for accessibility

### 6. **Navigation & Accessibility**

- ✅ Legal pages accessible from footer
- ✅ Clear navigation structure
- ✅ Mobile-friendly design
- ✅ Proper heading hierarchy
- ✅ Alt text for images

## 🔄 **REQUIRED UPDATES (Before Launch)**

### 1. **Business Information Updates**

```typescript
// Update in src/config/site.ts
business: {
  ico: "REAL_ICO_NUMBER", // Replace with actual IČO
  dic: "REAL_DIC_NUMBER", // Replace with actual DIČ
  license: "REAL_LICENSE_NUMBER", // Replace with actual license
  // ... other business details
}
```

### 2. **Contact Information**

```typescript
// Update in src/config/site.ts
contact: {
  phone: "REAL_PHONE_NUMBER", // Replace +421 xxx xxx xxx
  // ... other contact details
}
```

### 3. **Domain & Hosting**

- [ ] Register domain: `amcbreakky.sk`
- [ ] Set up SSL certificate (HTTPS)
- [ ] Configure hosting in Slovakia (recommended)
- [ ] Set up email: `info@amcbreakky.sk`

## 📋 **PRE-LAUNCH CHECKLIST**

### Legal Requirements

- [ ] **Consult Slovak lawyer** for final review
- [ ] **Register business** with proper IČO and DIČ
- [ ] **Obtain restaurant license** and food safety certificates
- [ ] **Update all placeholder information** with real data
- [ ] **Test cookie consent** functionality
- [ ] **Verify GDPR compliance** with legal expert

### Technical Requirements

- [ ] **SSL certificate** installation
- [ ] **Domain registration** and DNS setup
- [ ] **Email hosting** configuration
- [ ] **Backup system** implementation
- [ ] **Performance testing** and optimization
- [ ] **Mobile testing** on various devices

### Content Requirements

- [ ] **Real photos** of restaurant and food
- [ ] **Actual menu** with prices
- [ ] **Real testimonials** (if any)
- [ ] **Updated opening hours** if different
- [ ] **Contact form** functionality (if needed)
- [ ] **Reservation system** (if implementing)

## 🚨 **CRITICAL LEGAL NOTES**

### 1. **GDPR Compliance**

- ✅ Cookie consent implemented
- ✅ Privacy policy comprehensive
- ✅ User rights clearly stated
- ⚠️ **Must update with real business data**

### 2. **Slovak Business Law**

- ✅ Business information structure ready
- ⚠️ **Must add real IČO, DIČ, and license numbers**
- ⚠️ **Must verify with Slovak business registry**

### 3. **Food Service Regulations**

- ✅ Restaurant-specific terms included
- ⚠️ **Must comply with Slovak food safety laws**
- ⚠️ **Must display allergen information if required**

### 4. **Consumer Protection**

- ✅ Terms of service comprehensive
- ✅ Contact information provided
- ⚠️ **Must verify with Slovak consumer protection laws**

## 📞 **RECOMMENDED LEGAL CONSULTATIONS**

### 1. **Slovak Business Lawyer**

- Business registration compliance
- Tax law compliance
- Food service regulations

### 2. **Data Protection Expert**

- GDPR compliance verification
- Cookie law compliance
- Privacy policy review

### 3. **IT Security Expert**

- SSL certificate setup
- Data security measures
- Backup and recovery procedures

## 🎯 **LAUNCH READINESS STATUS**

### ✅ **Ready for Development/Testing**

- All legal pages implemented
- Cookie consent functional
- Basic compliance structure in place

### ⚠️ **Requires Updates Before Public Launch**

- Real business information
- Legal consultation
- Domain and hosting setup

### ❌ **Not Ready for Public Launch**

- Missing real business data
- No legal consultation completed
- No domain/hosting configured

## 📝 **NEXT STEPS**

1. **Immediate (Development Phase)**

   - Test all legal pages functionality
   - Verify cookie consent works properly
   - Test responsive design on all devices

2. **Before Legal Consultation**

   - Gather all business registration documents
   - Prepare restaurant license information
   - Collect real contact information

3. **Before Launch**
   - Complete legal consultation
   - Update all placeholder information
   - Set up domain and hosting
   - Install SSL certificate
   - Final testing and optimization

## 🔗 **USEFUL RESOURCES**

- [Úrad na ochranu osobných údajov SR](https://www.uoou.sk)
- [Európska komisia - GDPR](https://ec.europa.eu/info/law/law-topic/data-protection_sk)
- [Slovenská obchodná inšpekcia](https://www.soi.sk)
- [Ministerstvo hospodárstva SR](https://www.mhsr.sk)

---

**Note:** This checklist is for guidance only. Always consult with qualified legal professionals before launching a business website in Slovakia.

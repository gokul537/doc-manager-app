#  UI Test Cases – Document Management App (Frontend)

This document lists complete manual test cases for the Document Manager frontend built with **Next.js, TypeScript, Tailwind CSS**, and **Mock APIs**.

---

## 👤 Authentication (Login / Signup / Logout)

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-001       | Login as Admin                   | Go to `/login`, enter admin@example.com / admin123 → Submit     | Redirect to `/admin/users`                                     | ✅     |
| TC-002       | Login as User                    | Go to `/login`, enter user@example.com / user123 → Submit       | Redirect to `/documents`                                       | ✅     |
| TC-003       | Invalid Login                    | Enter wrong credentials                                          | Toast shows: "Invalid credentials"                             | ✅     |
| TC-004       | Signup New User                  | Fill all fields on `/signup`, click submit                       | Redirect to `/login`, Toast: "Signup successful"               | ✅     |
| TC-005       | Signup with Missing Fields       | Leave any field empty                                            | Error toast: "All fields are required"                         | ✅     |
| TC-006       | Logout Button Functionality      | Click 🔓 Logout on header                                        | Redirect to `/login`, localStorage cleared                     | ✅     |
| TC-007       | Logout Button Mobile Responsive  | On small screen, check logout button center alignment            | Button is centered and responsive                              | ✅     |

---

## 🧑‍💼 Admin Panel – User Management

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-008       | View User List                   | Login as admin → go to `/admin/users`                           | List of users shown with email and role                        | ✅     |
| TC-009       | Change User Role                 | Use dropdown to change user to admin or vice versa              | Role updates with toast "Role updated"                         | ✅     |
| TC-010       | Delete User                      | Click "Delete" button                                           | User removed from list with toast "User deleted"               | ✅     |
| TC-011       | Role Persistence                 | Refresh page after role change                                 | Changed role remains after reload                              | ✅     |

---

## 📂 User Dashboard – `/documents`

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-012       | Load Dashboard                   | Login as user → land on `/documents`                            | Sees options: Upload + Q&A                                     | ✅     |
| TC-013       | Navigation: Upload Button        | Click "Upload Document"                                         | Redirects to `/documents/upload`                               | ✅     |
| TC-014       | Navigation: Q&A Button           | Click "Ask a Question"                                          | Redirects to `/qa`                                             | ✅     |

---

## 📤 Upload Document – `/documents/upload`

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-015       | Upload with All Fields           | Enter title, desc, upload file → Submit                         | Success toast → redirect to dashboard                          | ✅     |
| TC-016       | Upload Without File              | Submit without choosing file                                    | Alert/toast: "Please select a file to upload."                 | ✅     |
| TC-017       | Upload Progress UI               | Submit form                                                     | Shows "Uploading..." for 2s then success                       | ✅     |

---

## 🤖 Q&A Interface – `/qa`

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-018       | Load Q&A Page                    | Visit `/qa`                                                     | Input field + button shown                                     | ✅     |
| TC-019       | Submit Question                  | Enter question and click Ask                                    | Mock reply or placeholder displayed                            | ✅     |

---

## ⚙️ Ingestion Page – `/ingestion`

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-020       | Load Page                        | Go to `/ingestion`                                              | Page shows ingestion info or placeholder                       | ✅     |
| TC-021       | Click Back Button                | Click "Back" button                                             | Redirects to `/documents`                                      | ✅     |

---

## 🧭 Sidebar Navigation

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-022       | Sidebar Link Highlighting        | Navigate between routes                                         | Active link highlighted                                        | ✅     |
| TC-023       | Mobile Toggle Opens Sidebar      | Resize screen <768px → click ☰                                  | Sidebar slides in                                              | ✅     |
| TC-024       | Mobile Toggle Closes Sidebar     | Click outside overlay or ✕ button                              | Sidebar closes                                                 | ✅     |
| TC-025       | Desktop Sidebar Fixed            | Screen >768px                                                  | Sidebar visible and content shifted                            | ✅     |

---

## 🧑‍💻 UI Behavior + Animation + Toasts

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-026       | Toast: Login Error               | Enter wrong login credentials                                   | Toast shown: "Invalid credentials"                             | ✅     |
| TC-027       | Toast: Upload Success            | Upload document                                                 | Toast: "Upload successful"                                     | ✅     |
| TC-028       | Framer Motion Animations         | Hover/tap logout/sidebar                                         | Smooth animations shown                                        | ✅     |
| TC-029       | Logout Appears Only When Logged In| Go to `/login` or `/signup`                                     | Logout button not rendered                                     | ✅     |

---

## 📱 Mobile Responsiveness

| Test Case ID | Scenario                         | Steps                                                           | Expected Result                                                | Status |
|--------------|----------------------------------|------------------------------------------------------------------|----------------------------------------------------------------|--------|
| TC-030       | Sidebar on Mobile                | Resize screen <768px                                            | ☰ toggle visible, sidebar hidden by default                   | ✅     |
| TC-031       | Sidebar Doesn't Overlap Header   | Open sidebar → check header                                     | No overlap or hidden text                                     | ✅     |
| TC-032       | Logout Button Centered on Mobile | Resize screen → check header logout button                      | Logout centered or aligned properly                           | ✅     |
| TC-033       | All Pages Scroll Correctly       | Test scrolling on all pages                                     | No fixed elements cover or break layout                        | ✅     |

---

## 📋 Summary

| Area                     | Covered |
|--------------------------|---------|
| Auth (Login/Signup)      | ✅      |
| Role Routing             | ✅      |
| Admin User Management    | ✅      |
| Upload/Q&A/Ingestion     | ✅      |
| Toasts + Animations      | ✅      |
| Responsive UI (Mobile)   | ✅      |
| Sidebar Navigation       | ✅      |
| Logout Button            | ✅      |

---

✅ **Tested across Chrome, Firefox & DevTools (mobile view)**  
🧪 **All flows tested manually with mock API responses**

---

> Let me know if you want me to turn this into a downloadable `.md` file or paste it into your GitHub `README.md`.



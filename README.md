# 🌊 Clean Beach Campaign – User Registration API

## 📌 Overview

The **Clean Beach Campaign** is a **Spring Boot + Angular** web application that allows users to **register** for beach-cleaning campaigns and **view** the list of registered participants.

Currently, the backend exposes **two RESTful APIs**:

- Register a new user
- List all registered users

---

## 🚀 Tech Stack

### **Backend** (Spring Boot)

- **Framework**: Spring Boot 3.5.5
- **Language**: Java 17
- **Database**: MySQL / H2 (for testing)
- **Build Tool**: Maven
- **Port**: `8080`

### **Frontend** (Angular)

- **Framework**: Angular 17+
- **Language**: TypeScript, HTML, CSS
- **Port**: `4200`

---

## 📂 Project Structure

```
clean-beach-campaign/
├── frontend/                 # Angular frontend
│   ├── src/app/              # Components, services, models
│   ├── package.json
│   └── angular.json
│
└── backend/                  # Spring Boot backend
    ├── src/main/java/backend/
    │   ├── RegistrationController.java  # API endpoints
    │   ├── UserService.java             # Business logic
    │   ├── UserRepository.java         # Database access
    │   └── User.java                   # Entity class
    ├── src/main/resources/
    │   ├── application.properties
    └── pom.xml
```

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-username/clean-beach-campaign.git
cd clean-beach-campaign
```

---

### **2️⃣ Backend Setup**

#### **Step 1 — Open Project**

- Open the `backend` folder in **Spring Tool Suite (STS)** or **IntelliJ**.

#### **Step 2 — Configure Database**

Edit `src/main/resources/application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/clean_beach
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
server.port=8080
```

#### **Step 3 — Build & Run**

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

---

### **3️⃣ Frontend Setup**

#### **Step 1 — Install Dependencies**

```bash
cd frontend
npm install
```

#### **Step 2 — Run Angular App**

```bash
ng serve
```

Frontend will start at: **[http://localhost:4200](http://localhost:4200)**

---

## 📡 API Endpoints

### **Base URL**

```
http://localhost:8080/api/users
```

| Method | Endpoint    | Description           | Request Body |
| ------ | ----------- | --------------------- | ------------ |
| POST   | `/register` | Register a new user   | JSON         |
| GET    | `/`         | Get list of all users | None         |

---

### **1️⃣ Register a New User**

**POST** `/api/users/register`

#### Request Body

```json
{
  "name": "sample1",
  "email": "sample1@example.com",
  "location": "sample1",
  "campaignName": "sample1"
}
```

#### Sample Response

```json
{
  "id": 1,
  "name": "sample1",
  "email": "sample1@example.com",
  "location": "sample1",
  "campaignName": "sample1"
}
```

---

### **2️⃣ Get All Registered Users**

**GET** `/api/users`

#### Sample Response

```json
[
  {
    "id": 1,
    "name": "sample1",
    "email": "sample1@example.com",
    "location": "sample1",
    "campaignName": "sample1"
  },
  {
    "id": 2,
    "name": "sample2",
    "email": "sample2@example.com",
    "location": "sample2",
    "campaignName": "sample2"
  }
]
```

---

## 🧪 Testing the Backend APIs

### **Using Postman**

1. Open **Postman**.
2. Set URL:

   - `POST http://localhost:8080/api/users/register`
   - `GET  http://localhost:8080/api/users`

3. For POST, go to **Body → raw → JSON**.
4. Paste the request JSON.
5. Click **Send**.

---

## 🐞 Troubleshooting

| Issue                         | Solution                                                                   |
| ----------------------------- | -------------------------------------------------------------------------- |
| `user.getName()` returns null | Ensure Lombok plugin is installed and **annotation processing** is enabled |
| `404 Not Found`               | Check API endpoint path matches in controller                              |
| `401 Unauthorized`            | No authentication added yet; ensure CORS is configured                     |
| Lombok not working            | Install Lombok plugin and enable it in IDE                                 |
| Angular CORS error            | Use `@CrossOrigin(origins = "http://localhost:4200")`                      |

---

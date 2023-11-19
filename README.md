
# Student Management Application - backend: API

In the terminal:
1. git clone https://github.com/AishwaryaGanesh02/student-management-application-backend
2. npm install
3. node index.js
   (or)
   npm i nodemon
   npx nodemon index.js


Running the application in the local environment
http://localhost:3000/

### 1. SHOW ALL STUDENTS

  Route:           /
  
  Description:     Show all students
  
  Access:          Public
  
  Parameter:       NONE
  
  Methods:         GET

### 2. FILTER STUDENTS BASED ON CLASS

  Route:           /class/:class
  
  Description:     Get students based on class
  
  Access:          Public
  
  Parameter:       class
  
  Methods:         GET
  
### 3. FILTER STUDENTS BASED ON PERCENTAGE

  Route:           /percentage/:low/:high
  
  Description:     Get students based on percentage
  
  Access:          Public
  
  Parameter:       low, high
  
  Methods:         GET
  
### 4. FILTER STUDENTS BASED ON GRADE

  Route:           /grade/:grade"
  
  Description:     Get students based on grade
  
  Access:          Public
  
  Parameter:       grade
  
  Methods:         GET
  
### 5. SELECT SPECIFIC STUDENT BASED ON ID

  Route:           /id/:id
  
  Description:     Get students based on id
  
  Access:          Public
  
  Parameter:       id
  
  Methods:         GET
  
### 6. ADD A STUDENT

  Route:           /students/new
  
  Description:     Add a student
  
  Access:          Public
  
  Parameter:       NONE
  
  Methods:         POST
  
### 7. UPDATE A STUDENT MARKS RECORD

  Route:           /students/marks/update
  
  Description:     Update a student record
  
  Access:          Public
  
  Parameter:       NONE
  
  Methods:         PUT
  
### 8. DELETE A STUDENT RECORD

  Route:           /students/delete/:id
  
  Description:     Delete a student record
  
  Access:          Public
  
  Parameter:       id
  
  Methods:         DELETE
  
### 9. AVERAGE OF A STUDENT

  Route:           /average/id/:id
  
  Description:     Average marks of a student
  
  Access:          Public
  
  Parameter:       id
  
  Methods:         GET
  
### 10. AVERAGE OF A CLASS

  Route:           /average/class
  
  Description:     Average marks of a class
  
  Access:          Public
  
  Parameter:       class
  
  Methods:         GET  
  
Use Postman or cURL for PUT, POST and DELETE requests.


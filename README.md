# HealthFront
Hack-O-Fest

//Functionality of our Project
1.Signup:

Navigate to the signup page.
Enter your name, email,phone,address and password.(email should be unique)
Click the "Signup" button.
you will redirect to login page

2. Login :
Enter the Correct email or password you were used at register
click "Login" button
You will be logged in redirect to Home page

3. book An Appointment

   you have to go to doctors on navbar.
   choose the preferred doctor as there is a SearchBar where you can search by doctor name and Speciality
   click the "VISIT NOW" for visit doctor's clinic where you can book An "Appointment" for this doctors.
   fill the required form and click the BOOK THE APPOINTMENT button.
   you will redirect to payment page where you can pay the doctor fee(NOTE: payment section is static not integreated it)

4 Admin Side "/admin" for doctor (Note: since middleware is not used we can reach to admin page )
      ADMIN FUNCTIONALITY
      
      a.> Admin/Doctor can see the all the appointment booked for him.
              in book an appointment section , there is an input of "Reason to visit" option
              if admin think it is case of emergency he/she priortise that patient to see as early as possible
              
      b.> There is a notification section in admin page from where he/she can give update the patient earlier that today he/she
              can look for the patient from 11 p.m. such that patient can manage their time according to their appoinment no.

      c.> After checkup if any patient is to be admitted, there is an option of Adding patient in given room such that patient's relative , nurses
          can easily search in which room which patient is admitted. 
          (Note: client have to search by patient name but Admin can look whole patient name and their room at their "/admin" page

5 Online Medical Shop
      click on medicines on Navbar 
      There is search bar where you can search the medicine and then buy it through online/cash on delivery payment
            (Note: Search-Bar is api integrated by payment page is static now , we can integrate it in future


-------------------------------------------------------------

List of ProJect Dependencies

Frontend
1. axios : JsLibrary used for making HTTPs request from browser,it uses promises
2. react-dom : provide methods for rendering components,updating and handling them
3. react-icons: provide beutiful icons
4. react-toastify:to display temporarily messages in the screen to provide feedbacks or alert to the user

Backend
1.bcryptjs: hashing the password during registration
cors : specify which origins are allowed to access the resources(backend localhost:8000 , frontend:5173)
express: framework of backend
mongoose: library of MongoDB,straightforward way to interact with databases
validators:ensuring integrity, security,and usability of web application

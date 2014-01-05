use user
db.createCollection("username")
db.createCollection("password")
db.createCollection("usertype")
<!-- Multiple values("teacher", "phd", "student", "admin") -->
db.createCollection("active")
<!-- Type: Boolean -->
db.createCollection("sessionId")
db.createCollection("lastActive")
<!-- Type: Date -->

use teacher
db.createCollection("firstName")
db.createCollection("secondName")
db.createCollection("lastName")
db.createCollection("phone")
db.createCollection("email")
db.createCollection("address")
db.createCollection("department")
db.createCollection("title")
db.createCollection("hireDate")
<!-- Type: Date -->

use phd
db.createCollection("firstName")
db.createCollection("secondName")
db.createCollection("lastName")
db.createCollection("phone")
db.createCollection("email")
db.createCollection("address")
db.createCollection("report")
<!-- PHD Report -->
db.createCollection("department")
db.createCollection("startDate")
<!-- Type: Date -->
db.createCollection("program")
<!-- What is the subject of phd qualification -->
db.createCollection("formOfEducation")
<!-- Multiple values("full-time", "part-time", "independent") -->
db.createCollection("code")
<!-- PHD code -->
db.createCollection("directorOfStudies")
<!-- [_id of teacher]  -->
db.createCollection("status")
<!-- Multiple values("defended", "assigned", "dropin", "unassignedWithRights", , "unassigned") - phd thesis defense-->
db.createCollection("educationPlan", { 
						fileName: "", <!--  Path to uploaded file  -->
						report: "", <!-- Number of the protocol (or maybe it should not exist at all)-->
						reportDate: Date, <!-- Date of the protocol -->
						content: ""
						})
db.createCollection("workPlan",  { 
						fileName: "", <!--  Path to uploaded file  -->
						creationDate: Date, <!-- Date of the protocol -->
						content: ""
						})
db.createCollection("generalPlan",  { 
						fileName: "", <!--  Path to uploaded file  -->
						content: ""
						})
db.createCollection("attestations", {
						fileName: "" <!--  Path to uploaded file  -->
						creationDate: Date
						programDueDate: Date
						programRating: ""
						languageDueDate: Date
						languageRating: String
						questions: ""
						disertationWork: ""
						result: "" <!-- Result from Departmental Council -->
						publication: "" <!-- Publication that is connected with disertation -->
						pedagogueWork: "" <!-- Pedagogue Work Info -->
						directorOfStudiesOpinion: "" <!-- Opinion concerning phd work-->
						reportNumber: "" <!-- Assignment report number -->
						note: ""
						})
db.createCollection("individualPlan", {
						fileName: "" <!--  Path to uploaded file  -->
						orderId: "" <!-- Assignment order number -->
						orderDate: Date
						endDate: Date <!-- Date of phd graduation -->
						disertationTheme: ""
						themeAcceptDate: Date <!-- Date of Meeting of the Faculty Council when theme is accepted -->
						themeReportId: "" <!-- Number of theme acceptance report number -->
						themeReportDate: Date <!-- Date of theme acceptance report -->
						acceptDate: Date <!-- Date of theme acceptance -->
						reportId: "" <!-- Individual plan acceptance report -->
						reportDate: Date <!-- Report date -->
						})

use student
db.createCollection("firstName")
db.createCollection("secondName")
db.createCollection("lastName")
db.createCollection("phone")
db.createCollection("email")
db.createCollection("address")
db.createCollection("practiceRating", {
						fileName: "" <!--  Path to uploaded file  -->
						directorOfPractice: ""
						levelOfCompletence: full|satisfactory|partially|incomplete
						results: "" <!-- Performance -->
						acquiredSkills: ""
						finishedOnTime: "" <!-- Yes, if no - why -->
						directorOfPractiseOpinion: ""
						overallRating: ""
						recommendations: ""
						currentDate: Date <!-- Automatically filled -->
						})
db.createCollection("practiceProposal", {
						fileName: "" <!--  Path to uploaded file  -->
						company: ""
						companyInfo: "" <!-- Contacts, email, telephone -->
						practiceSubject: ""
						practiceAnnotation: ""
						practiceAim: ""
						practiceTasks: ""
						conditions: ""
						duration: ""
						workplace: ""
						currentDate: Date
						})
db.createCollection("facNumber")
db.createCollection("subjectOfStudies")
db.createCollection("masterProgram")
<!-- [_id of teacher]  -->
db.createCollection("formOfEducation")
<!-- Multiple values("full-time", "part-time", "independent") -->
db.createCollection("startYear")
db.createCollection("workCompany")
db.createCollection("review", {
						fileName: "" <!--  Path to uploaded file  -->
						criteria: ""
						generalOpinion: ""
						questions: ""
						conclusions: ""
						ratingWords: ""
						creation: Date
						})
db.createCollection("application", { <!-- Application for admission -->
						fileName: "" <!--  Path to uploaded file  -->
						status: <!-- Accepted or not accepted -->
						})
db.createCollection("thesisProposal", {<!-- предложение за дипломна работа -->
		fileName : ""
		consultant: ""
		annotation: ""
		goal: ""
		tasks: ""
		conditions: ""
		realizationDate: ""
		proposalDate: ""
	})
	
db.createCollection("graduationWork" : {
		thesisFilename : ""
		directorOfStudies : {
			type : mongoose.Schema.ObjectId,
			ref : "Teacher"
		},
		reviewer : {
			type : mongoose.Schema.ObjectId,
			ref : "Teacher"
		},
		themeNameBg : ""
		themeNameEn: ""
		defenceDate: Data
		themeNameEn: ""
		defenced: {
			type: Boolean
		},
		ratingThesis: "" <!-- Оценка на дипломна работа -->
		ratingGeneral: ""
		summaryBg: ""
		summaryEn: ""
	}),
db.createCollection("reportAssignment": {
		filename: ""
		report: "",
		reportDate: ""
		participationCons: "" <!-- Participation of consultator in thesis -->
		}
	)







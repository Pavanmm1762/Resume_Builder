// regex for validation
const strRegex = /^[a-zA-Z\s] *$/; // containing only letters
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^[\+]?[]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
/* supports following HTMLElement | null
456-7890, 123-456-789 String that specifies the ID value.
075-63546725 */
const digitRegex = /^\d+$/; 
const mainForm = document.getElementById('cv-form');
const validType = {
    TEXT: 'text',
    TEXT_EMP: 'text_emp',
    EMAIL: 'email',
    DIGIT: 'digit',
    PHONENO: 'phoneno',
    ANY: 'any',
    }
   
    // user inputs elements
    let firstNameEle= mainForm.firstname,
        middlleNameElem= mainForm.middlename,
        lastNameElem= mainForm.lastname,
        imgElem= mainForm.img,
        designationElem= mainForm.designation,
        addressElem= mainForm.address,
        phoneElem= mainForm.phoneNo,
        emailElem= mainForm.email,
        summaryElem= mainForm.summary;
    
    // display elements
    let nameDsp = document.getElementById('fullname_dsp'),
        imageDsp = document.getElementById('img_dsp'),
        phonenoDsp= document.getElementById('phoneno_dsp'),
        emailDsp= document.getElementById('email_dsp'),
        addressDsp = document.getElementById( 'address_dsp'),
        designationDsp = document.getElementById( 'designation_dsp'),
        summaryDsp = document.getElementById('summary_dsp'),
        projectsDsp = document.getElementById('proj_dsp'),
        achievementsDsp = document.getElementById('achiev_dsp'),
        skillsDsp = document.getElementById('skills_dsp'),
        educationsDsp = document.getElementById('edu_dsp'),
        experiencesDsp = document.getElementById('exe_dsp');
    
// first for the attributes and 2nd for the node lists
const fetchValues=(attrs, ...nodeLists)=>{
    let elemattrsCount= nodeLists.length;
    let elemDataCount= nodeLists[0].length;
    let tempDataArr= [];

    //1st loop for number repeaters value
    for(let i=0; i < elemDataCount; i++){
        let dataObj= {};// creating an empty object to fill the data

        //2nd loop fetches data for each repeators value or attributes
        for(let j=0; j< elemattrsCount; j++){
            //setting the key name for the object and fill it with data
            dataObj['${attrs[j]}'] = nodeLists[j][i].value;
        }
        tempDataArr.push(dataObj);
    }
    return tempDataArr;
}

const getUserInputs=()=>{

    let achievementsTitleElem= document.querySelectorAll('.achieve-title'),
        achievementsDescrElem= document.querySelectorAll('.achieve-description');
    
    // experience
    let expTitleElem= document.querySelectorAll('.exper-title'),
        exporganizationElem= document.querySelectorAll('.exper-description'),
        expLocationElem= document.querySelectorAll('.exper-loc'),
        expStartDateElem= document.querySelectorAll('.exp-start-date'),
        expEndDateElem= document.querySelectorAll('.exp-end-date'),
        expDescriptionElem= document.querySelectorAll('.exper-descriptions');

    // education
    let eduSchoolElem= document.querySelectorAll('.edu-school'),
        eduDegreeElem = document.querySelectorAll('.edu-degree'),
        eduCityElem= document.querySelectorAll('.edu-city'),
        eduStartDateElem= document.querySelectorAll('.edu-start-date'),
        eduGraduationDateElem= document.querySelectorAll('.edu-end-date'),
        eduDescriptionElem= document.querySelectorAll('.edu-description');
    
    let projTitleElem= document.querySelectorAll('.proj-title'),
        projLinkElem= document.querySelectorAll('.proj-link'),
        projDescriptionElem= document.querySelectorAll('.proj-description');

    let skillElem = document.querySelectorAll('.skill');

    //event listeners for form validation
    firstNameEle.addEventListener('keyup',(e)=> validateFormData(e.target, validType.TEXT,
        'First Name'));
    middlleNameElem.addEventListener('keyup',(e)=> validateFormData(e.target,
        validType.TEXT_EMP,'Middle Name'));
    lastNameElem.addEventListener('keyup',(e)=> validateFormData(e.target, validType.TEXT,
        'Last Name'));
    phoneElem.addEventListener('keyup',(e)=> validateFormData(e.target, validType.PHONENO,
        'Phone Number'));
    emailElem.addEventListener('keyup',(e)=> validateFormData(e.target, validType.EMAIL,
        'Email'));
    addressElem.addEventListener('keyup',(e)=> validateFormData(e.target, validType.ANY,
        'Address'));
    designationElem.addEventListener('keyup',(e)=> validateFormData(e.target, validType.ANY,
        'Designation'));

    achievementsTitleElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Title')));
    achievementsDescrElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Description')));
    expTitleElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Title')));
    expDescriptionElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Description')));
    expLocationElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Location')));
    expEndDateElem.forEach(item => item.addEventListener('blur',(e)=> validateFormData(e.target, 
        validType.ANY,'End Date')));
    expStartDateElem.forEach(item => item.addEventListener('blur',(e)=> validateFormData(e.target, 
        validType.ANY,'Start Date')));
    exporganizationElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Title')));
    eduSchoolElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'School')));
    eduCityElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'City')));
    eduDegreeElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Degree')));
    eduStartDateElem.forEach(item => item.addEventListener('blur',(e)=> validateFormData(e.target, 
        validType.ANY,'Start Date')));
    eduGraduationDateElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Graduation Date')));
    projTitleElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Title')));
    projLinkElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Link')));
    projDescriptionElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, 
        validType.ANY,'Description')));
    skillElem.forEach(item => item.addEventListener('keyup',(e)=> validateFormData(e.target, validType.ANY,'Skill')));


        return{
        firstname: firstNameEle.value,
        middlename: middlleNameElem.value,
        lastname: lastNameElem.value,
        designation: designationElem.value,
        address: addressElem.value,
        phoneNo: phoneElem.value,
        email: emailElem.value,
        summary: summaryElem.value,
        achievements: fetchValues(['achieve-title', 'achieve-description'], achievementsTitleElem, achievementsDescrElem),
        experiences: fetchValues(['exper-title', 'exper-description', 'exper-loc', 'exp-start-date', 'exp-end-date', 'exper-descriptions'], expTitleElem, exporganizationElem, expLocationElem, expStartDateElem, expEndDateElem, expDescriptionElem),
        educations: fetchValues(['edu-school', 'edu-degree', 'edu-city', 'edu-start-date', 'edu-end-date', 'edu-description'],eduSchoolElem, eduDegreeElem, eduCityElem, eduStartDateElem, eduGraduationDateElem, eduDescriptionElem),
        projects: fetchValues(['proj-title', 'proj-link', 'proj-description'],projTitleElem, projLinkElem, projDescriptionElem),
        skills: fetchValues(['skill'], skillElem)
    }

}

function validateFormData(elem, elemType, elemName) {
    // checking for text string and non empty string
        if(elemType==validType.TEXT){
            if(!strRegex.test(elem.value) || elem.value.trim().length == 0) 
                addErrMsg(elem,elemName);
            else removeErrMsg(elem);
        }
        
        // checking for only text string
        if(elemType = validType.TEXT_EMP){
            if(!strRegex.test(elem.value)) addErrMsg(elem, elemName);
            else removeErrMsg(elem);
        }
    
        // checking for email
        if(elemType== validType.EMAIL){
            if(!emailRegex.test(elem.value) || elem.value.trim().length == 0) addErrMsg
                (elem, elemName);
                else removeErrMsg(elem);
        }
   
        // checking for phone number
    if(elemType = validType.PHONENO) {
            if(!phoneRegex.test(elem.value) || elem.value.trim().length== 0) addErrMsg
            (elem, elemName);
            else removeErrMsg(elem);
        }
    // checking for only empty
    if(elemType=validType.ANY){
            if(elem.value.trim().length==0) addErrMsg(elem,elemName);
            else removeErrMsg(elem);
    }
           
}
    
    // adding the invalid text
    function addErrMsg(formElem, formElemName) {
      formElem.nextElementSibling.innerHTML = '${formElemName} is invalid';
    }
    
    // removing the invalid text
    function removeErrMsg(formElem){
    formElem.nextElementSibling.innerHTML = "";
    }

// show the list data
const showListData= (listData, listContainer) => {
        listContainer.innerHTML= "";
        listData.forEach(listItem => {
            let itemElem = document.createElement('div');
            itemElem.classList.add('preview-item');
            for(const key in listItem){
                let subItemElem= document.createElement('span');
                subItemElem.classList.add('preview-item-val');
                subItemElem.innerHTML = '${listItem[key]}';
                itemElem.appendChild(subItemElem);
            }
            listContainer.appendChild(itemElem);
        })
    }


    const displayCV=(userData) => {
        nameDsp.innerHTML = userData.firstname + " " + userData.middlename + " " + userData.
        lastname;
        phonenoDsp.innerHTML = userData.phoneno;
        emailDsp.innerHTML = userData.email;
        addressDsp.innerHTML = userData.address;
        designationDsp.innerHTML = userData.designation;
        summaryDsp.innerHTML = userData.summary;
        showListData(userData.projects, projectsDsp);
        showListData(userData.achievements, achievementsDsp);
        showListData(userData.skills, skillsDsp);
        showListData(userData.educations, educationsDsp);
        showListData(userData.experiences, experiencesDsp);
        }

const generateCV=()=>{
    let userData= getUserInputs();
    displayCV(userData);
    console.log(userData);
}
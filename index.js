const express = require("express");


const app = express();


//port
const port = 8000;

//Starting server
app.listen(port, () => {
    console.log(`app is running ${port}`);
});

getCountyDetails = (req,res)=>{
  console.log(req);

  let message = req.query.message || req.body.message || 'Api Server Response';
  console.log(req)
  let par = req.sessionInfo.params["location"]
  console.log(par)
  
  const jsonResponse = {
    fulfillment_response: {
      messages: [
        {
          text: {
            //fulfillment text response to be sent to the agent
            text: par,
          },
        },
      ],
    },
    payload: {
      "tesing": {
        "json":"inside",
        "array": {
        "program_name": "Allegany County Infants & Toddlers Program",
        "address": "108 Washington Street, Allegany County Public Schools, Cumberland, MD 21502",
        "phone": "(301) 759-2415",
        "link": "http://www.acpsmd.org/domain/20",
        "email": "birthto5@acpsmd.org",
        "working_hours": "Mon-Fri 8am-3:30pm",
        "available_programs": {
            "Addictions & Substance Use": [
                "Addictions/Substance Use Disorder Support Groups", 
                "Comprehensive Outpatient Substance Use Disorder Treatment ",
                "Detoxification ",
                "DUI Offender Programs ",
                "Recovery Homes/Halfway Houses ",
                "Residential Substance Use Disorder Treatment Facilities ",
                "Substance Use Disorder Counseling ",
                "Substance Use Disorder Education/Prevention "
            ],          
            "Aging & Disability Assistance": [
                "Adult Day Programs ",
                "Adult Protective Services ",
                "Area Agencies on Aging ",
                "Bereavement and Grief Counseling ",
                "Dementia Management ",
                "Disease/Disability Information ",
                "Early Intervention for Children With Disabilities/Delays ",
                "Elder Abuse Counseling ",
                "Geriatric Counseling ",
                "Home Improvement/Accessibility ",
                "In Home Assistance ",
                "Mentoring Programs ",
                "Occupational Therapy ",
                "Paratransit Programs ",
                "Physical Therapy ",
                "Protection and Advocacy for Individuals With Disabilities ",
                "Respite Care ",
                "Senior Centers ",
                "Service Animals ",
                "Supported Employment ",
                "Supportive Therapies ",
                "Telecommunication Relay Services ",
                "Vocational Rehabilitation"
            ],  
            "Community Resources": [],  
            "Criminal Justice & Legal Services": [],  
            "Crisis & Emergency Services": [],  
            "Education": [],  
            "Employment": [],  
            "Financial Assistance": [],  
            "Housing & Homeless Services": [],  
            "Mental Health": [],  
            "Physical Health & Wellness": [],  
            "Veterans & Military Members": [],  
            "Youth & Families": []
        },
        "enrollment_process": "Anyone can make a referral by calling our office (301) 759-2415. Paper referrals are also accepted.",
        "eligibility": "A child must be between the ages of birth to three, reside in Allegany County and meet one of the following criteria: Has a 25% or greater delay in any area of development; is developing in a way that is considered “atypical” for most children his or her age or; has a diagnosed condition that is likely to affect development.",
        "is_private": false
      }
      }
    },
  };

  res.status(200).send(jsonResponse);
}
app.get('/',(req,res)=>{res.status(200).send("sfds")})

app.get('/api/getCountyDetails',getCountyDetails)
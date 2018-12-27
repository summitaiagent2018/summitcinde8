// JavaScript source code
const config = {
    "App": {
        "webService": {
            "hostName": "customerdemo.symphonysummit.com",
            "path": "/SummitAI/DC/REST/Summit_RESTWCF.svc/RESTService/CommonWS_JsonObjCall",
            "userName": "admin@symphonysummit.com",
            "password": "Test@1234"
        },
        "azureSearchAPI": {
            "hostName": "azuresearchsummitbotservice01.search.windows.net",
            "apiKey": "26F3A9597159B56667A4531A4AA16D5E",
            "path": "/indexes/azuresearchsummitbotservice-index01/docs?api-version=2017-11-11&search="
        },
        "Auth": {
            "chatBotID": "abc"
        }
    },
    "responseMessages": {
        "signInMsg": "To get your account details",
        "defaultWelcomeMsgVoiceDevice": {
            "mainMsg": "Hi, I am Summit Cinde. I can help you with your incidents and service requests: For example, you can ask me things like: My outlook is not working, I need virtual machine, What is the status of my last incident and so on.",
            "followUpQuestion": "So, How can I help you?"
        },
        "defaultWelcomeMsgPhoneSurface": {
            "mainMsg": "I am Summit Cinde. I can help you with your incidents and service requests: For example, you can ask me things like:",
            "suggestions": {
                "sug1": "My outlook is not working",
                "sug2": "I need virtual machine",
                "sug3": "My Wi-fi is not working"
            }
        },
        "onSignInFailure": "You need to sign in before using the app.",
        "inValidUser": "User does not Exist. Kindly try again with a valid user.",
        "defaultFollowUpMsg": " Is there something else do you want me to assist you?",
        "onSignInSuccess": "Hi,  %s ! Thanks for signing in. ",
        "questionToDisplayKB": "Hey! I have a few recommendations for your problem. Would you like to review them before logging the incident?",
        "questionForLoggingIncident": "Do you want me to log an incident for you?",
        "onSuccessKBConfirmation": "Here are a few recommendations related to  %s. Please have a look and let me know whether the recommendations were helpful or not.",
        "onKBArticlesHelpful": "Hurray! I am glad to note that the recommendations were of help to you! ",
        "onKBArticlesNotHelpful": "I get that! I will take this as an input. After all, I like to continuously learn from our conversations. ",
        "getDecriptionMsg": "Please provide me the detailed description.",
        "OnNoToIncidentLogging": "Hmmm, looks like your problem is resolved! ",
        "OnIncidentNotLogged": "Sorry, Could not log an incident. ",
        "OnIncidentLoggedSuccessfully": "New ticket has been logged successfully and the ticket number is %s. ",
        "questionToCreateSR": "Do you want to create a Service Request for %s?",
        "toDisplayCatalogOptions": {
            "phoneSurface": "Ok, Looks like we have many options related to your request! Please select one of the below options so that I can proceed with your request.",
            "voiceDevice": "Ok, Looks like we have many options related to your request! Such as %s. Which one do you want?"
        },
        "entityNotFound": "I am afraid to tell that the requested entity is not found in the list. I may be wrong. Hence, kindly request you to be more specific regarding your request so that I can help you with it.",
        "cantUnderstandUserInput": "Sorry, Could not interpret that. But I'm learning.",
        "toDisplayCatalogOptionsSubMsg": {
            "phoneSurface": "I have found few variants under your request. Select any one of them to create a Service Request.",
            "voiceDevice": "I have found few variants under your request. Such as %s. Which one do you want?"
        },
        "msgToFetchCustomAttriutes": {
            "mainMsg": "Please provide me the following details to complete your request. ",
            "dropDownMsg": "I have found %s variants under %s. Such as %s. Which one do you want?",
            "textBoxMsg": "Please enter the %s",
            "dateMsg": "Please specify the %s in \"DDMMYYYY\" format.",
            "formulaMsg": "Please reply with OK to move to next input.",
            "itemListMsg": "Please specify the %s"
        },
        "requestNotRequired": "Sure, I abide by your command. ",
        "OnInvalidOptionSelection": "Not a valid option. ",
        "OnThirdTimeInvalidOptionSelected": "Sorry, could not create a Service Request. ",
        "OnFailureSRRequest": "Sorry I could not log the service request. Please try again later. ",
        "OnSuccessSRRequest": "I have raised a Service Request with the provided information and your Service Request ID is, %s.",
        "Incident/SRNotFound": "I suppose the Incident/S R  %s is not logged by you. Hence  I am not authorised to share the details with you. Kindly request you to provide specific keyword. Thank you.",
        "SameIncidentAndSRNumber": "Kindly request you to specify whether you would like to know about Incident or Request. ",
        "openIncidentStatus": {
            "phoneSurface": "There is 1 %s incident. Below are the details. Select any one of the following actions, if you would want to carry out any action specific to the incident",
            "voiceDevice": "There is 1  %s incident for,  %s. The ticket number of the incident is  %s and the incident was logged at %s. We can carry out many actions related to the incident. Such as Provide Updates, Remind the Analyst, Escalate, Cancel the Incident and No Action Required. Which one do you want? "

        },
        "closedIncidentStatus": {
            "phoneSurface": "There is 1 %s incident. Below are the details. Select any one of the following actions, if you would want to carry out any action specific to the incident.",
            "voiceDevice": "There is 1 %s incident for, %s. The ticket number of the incident is %s and the incident was logged at %s. We can carry out many actions related to the incident. Such as Provide feedback, Reopen and No Action Required. Which one do you want? "
        },
        "openSRStatus": {
            "phoneSurface": "There is 1 %s Service Request. Below are the details. Select any one of the following actions, if you would want to carry out any action specific to the Service Request",
            "voiceDevice": "There is 1 %s Service Request for, %s. The ticket number of the Service Request is %s and the Service Request was logged at %s. We can carry out many actions related to the Service Request. Such as Provide Updates, Remind the Analyst, Escalate and No Action Required. Which one do you want? "
        },
        "closedSRStatus": {
            "phoneSurface": "There is 1 %s Service Request. Below are the details. Select any one of the following actions, if you would want to carry out any action specific to the Service Request.",
            "voiceDevice": "There is 1 %s Service Request for, %s. The ticket number of the Service Request is %s and the incident was logged at %s. We can carry out many actions related to the Service Request. Such as Provide feedback, Reopen and No Action Required. Which one do you want? "
        },
        "incidentUpdateMsgs": {
            "remind": "A reminder has been sent to the Analyst to resolve your incident as soon as possible. The Analyst will contact you in case any updates are required. ",
            "escalate": "I understand the resolution of this incident is important for you and hence you want to escalate. Please confirm - Yes/No. ",
            "cancel": "I understand that the incident has been resolved at your end. Hence, you want to cancel the incident. Please confirm - Yes/No. ",
            "noneOfTheAbove": "I have trouble understanding your response. Please enter any one of the below options:"
        },
        "onSuccessIncidentUpdate": {
            "update": "Thank you for providing the information. The incident has been successfully updated. ",
            "escalate": "The incident has been escalated successfully. Expecting a speedy resolution of this incident! "
        },
        "tofetchIncidentCancelReason": "Okay, could you please let me know the reason for cancellation. I like to learn about different solutions to a problem. ",
        "onSuccessfulIncidentCancelation": "The incident has been cancelled successfully, as desired by you. ",
        "SRUpdateMsgs": {
            "remind": "A reminder has been sent to the Analyst to resolve your SR as soon as possible. The Analyst will contact you in case any updates are required. ",
            "escalate": "I understand the resolution of this Service Request is important for you and hence you want to escalate. Please confirm - Yes/No. ",
            "noneOfTheAbove": "I have trouble understanding your response. Please enter any one of the below options:"
        },
        "onSuccessSRUpate": {
            "update": "Thank you for providing the information. The Service Request has been successfully updated. ",
            "escalate": "The Service Request has been escalated successfully. Expecting a speedy resolution of this Service Request! "
        },
        "noLastIncidentFound": "There are no incidents matching this criteria. It would be great if you could question me in a more concise manner.",
        "noLastSRFound": "There are no Service Requests matching this criteria. It would be great if you could question me in a more concise manner.",
        "statusOfMoreThanOneOpenIncidents": {
            "phoneSurface": "There are %s incidents. Below are the details. Select the incident if you wish to carry out any specific actions. If the desired incident is not listed below, request you to provide specific details so that I can help you with the right details. ",
            "voiceDevice": "There are %s incidents. And the ticket number of the incidents are %s. Which one would you like to know more about?"
        },
        "statusOfMoreThanOneOpenSRs": {
            "phoneSurface": "There are %s Service Requests. Below are the details. Select the Service Request if you wish to carry out any specific actions. If the desired Service Request is not listed below, request you to provide specific details so that I can help you with the right details",
            "voiceDevice": "There are %s Service Requests. And the ticket number of the Service Requests are %s. Which one would you like to know more about?"
        }

    }
};

module.exports = config;


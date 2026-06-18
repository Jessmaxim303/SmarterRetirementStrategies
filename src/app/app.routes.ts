import { Routes } from '@angular/router';

import { Contact } from "./contact/contact";
import { Privacy } from "./privacy/privacy";
import { Home } from "./home/home";
import { Team } from "./team/team";
import { Webinar } from "./webinar/webinar";

import { StepsRetireHappy01 } from "./steps-to-retire-happy-01/webinar-landing";
import { StepsRetireHappy02 } from "./steps-to-retire-happy-02/webinar-landing";
import { StepsRetireHappy03 } from "./steps-to-retire-happy-03/webinar-landing";

export const routes: Routes = [
    { path: '', component: Home, },
    { path: 'contact', component: Contact, },
    { path: 'privacy', component: Privacy, },
		{ path: 'your-staff', component: Team, },
    { path: 'webinar', component: Webinar, }, 
    { path: 'steps-to-retire-happy-01/campaignid=5c89022d-245a-f111-bec7-6045bd08bb8b&type=scheduled', component: StepsRetireHappy01, },
    { path: 'steps-to-retire-happy-02/campaignid=5c89022d-245a-f111-bec7-6045bd08bb8b&type=scheduled', component: StepsRetireHappy02, },
    { path: 'steps-to-retire-happy-03/campaignid=5c89022d-245a-f111-bec7-6045bd08bb8b&type=scheduled', component: StepsRetireHappy03, },
    
    
];

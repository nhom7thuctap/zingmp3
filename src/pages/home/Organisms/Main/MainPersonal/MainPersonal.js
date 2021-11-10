import React from 'react';
import { PersonalButtonsTop } from '../../../Molecules/PersonalButtonsTop/PersonalButtonsTop';
import PersonalNavbar from '../../../Molecules/PersonalNavbar/PersonalNavbar';
import PersonalProfile from '../../../Molecules/PersonalProfile/PersonalProfile';

function MainPersonal() {
  return (
    <div className="personal">
      <PersonalButtonsTop />
      <PersonalProfile avatar="./images/radio7.jpg" name="Luna Lovegood" />
      <PersonalNavbar />
    </div>
  );
}

export default MainPersonal;

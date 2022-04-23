import React from 'react';
import ApproveCandidate from "../common/approve_candidate/approve_candidate";

const ApproveCompanyRepCandidates = ({username}) => (
    <ApproveCandidate username={username} userType={"companyRep"}/>
)

export default ApproveCompanyRepCandidates;
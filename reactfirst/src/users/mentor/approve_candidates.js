import React from 'react';
import ApproveCandidate from "../common/approve_candidate/approve_candidate";

const ApproveMentorCandidates = ({username}) => (
    <ApproveCandidate username={username} userType={"mentor"}/>
)

export default ApproveMentorCandidates;
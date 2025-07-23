import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../redux/store";

import {
  Container,
  ContentBox,
  ProfilePaper,
  ProfileInfoWrapper,
  StyledAvatar,
  EditBtn,
  SectionPaper,
  GridBox,
} from "./ProfileStyle";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth.signUpData);
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <Container>
      <Typography variant="h6" fontWeight="bold">
        Account Setting
      </Typography>

      <ContentBox>
        <Typography fontWeight="bold" fontSize="1.3rem">
          My Profile
        </Typography>

        <ProfilePaper elevation={0}>
          <ProfileInfoWrapper>
            <StyledAvatar alt="Profile Picture" src={user.profilePic} />
            <div>
              <Typography fontWeight="bold">
                {user.firstName} {user.lastName}
              </Typography>
              <Typography color="text.secondary" fontSize="0.9rem">
                {user.role}
              </Typography>
            </div>
          </ProfileInfoWrapper>

          <EditBtn
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => navigate("/edit-profile")}
          >
            Edit
          </EditBtn>
        </ProfilePaper>

        <SectionPaper elevation={0}>
          <Typography variant="h6" gutterBottom>
            Personal Information
          </Typography>

          <GridBox>
            <div>
              <Typography variant="subtitle2">First Name</Typography>
              <Typography>{user.firstName}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2">Last Name</Typography>
              <Typography>{user.lastName}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2">Email Address</Typography>
              <Typography>{user.email}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2">Phone</Typography>
              <Typography>{user.phone}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2">Bio</Typography>
              <Typography>{user.role}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2">Date of Joining</Typography>
              <Typography>{user.joiningDate}</Typography>
            </div>
          </GridBox>
        </SectionPaper>

        <SectionPaper elevation={0}>
          <Typography variant="h6" gutterBottom>
            Address
          </Typography>

          <GridBox>
            <div>
              <Typography variant="subtitle2">Country</Typography>
              <Typography>{user.country}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2">State</Typography>
              <Typography>{user.state}</Typography>
            </div>
            <div>
              <Typography variant="subtitle2">Postal Code</Typography>
              <Typography>{user.postalCode}</Typography>
            </div>
          </GridBox>
        </SectionPaper>
      </ContentBox>
    </Container>
  );
};

export default Profile;

import { useState } from "react";
import background from "../../assets/background.png";
import Button from "../Button";
import Input from "../Input";
import ItemList from "../ItemList";
import {
  ContentContainer,
  ContentInfo,
  ContentProfile,
  ContentProfileDetails,
  ContentSearch,
  ContentBackgroundImg,
  ContentProfileImg,
  ContentSection,
  ContentSectionText,
} from "./styles";

const Content = () => {
  const [username, setUsername] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${username}`);
    const newUser = await userData.json();

    if (newUser.name) {
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({ avatar_url, name, bio, login });

      const reposData = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const newRepos = await reposData.json();
      if (newRepos.length) {
        setRepos(newRepos);
      }
    }
  };

  return (
    <>
      <ContentContainer>
        <ContentBackgroundImg src={background} />
        <ContentInfo>
          <ContentSearch>
            <Input
              inputHolder="@username"
              inputName="usuario"
              inputValue={username}
              inputOnChange={(e) => setUsername(e.target.value)}
            />
            <Button type="buscar" onClickButton={handleGetData} />
          </ContentSearch>
          {currentUser?.name ? (
            <>
              <ContentProfile>
                <ContentProfileImg src={currentUser.avatar_url} />
                <ContentProfileDetails>
                  <h3>{currentUser.name}</h3>
                  <span>@{currentUser.login}</span>
                  <p>{currentUser.bio}</p>
                </ContentProfileDetails>
              </ContentProfile>
              <hr />
            </>
          ) : null}

          {repos?.length ? (
            <ContentSection>
              <ContentSectionText>Repositórios</ContentSectionText>
              {repos.map((repo) => (
                <ItemList title={repo.name} description={repo.description} />
              ))}
            </ContentSection>
          ) : null}
        </ContentInfo>
      </ContentContainer>
    </>
  );
};

export default Content;

import React, { useState, useEffect } from 'react';
import * as W from './WorkIntroduce.style';
import viewSiteImage from '../../../assets/img/viewsite_white.png';
import WorkTitle from '../worktitle/WorkTitle';
import Image from '../image/Image';
import Developer from '../developer/Developer';
import Instagram from '../../../assets/img/instagram.png';
import Github from '../../../assets/img/github_white.png';
import RightButton from '../button/RightButton';
import LeftButton from '../button/LeftButton';

export default function WorkIntroduce({ data }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [data.prev, data.next]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : data.images.length - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < data.images.length - 1 ? prevIndex + 1 : 0,
    );
  };

  return (
    <W.WorkIntroduceContainer>
      <W.WorkTitleWrapper>
        <WorkTitle
          title={data.title}
          shortDescription={data.shortDescription}
          deployUrl={data.deployUrl}
          src={viewSiteImage}
        />
      </W.WorkTitleWrapper>
      <W.ImageWrapper>
        <LeftButton position="top" onClick={handlePrevClick} />
        <Image src={data.images[currentImageIndex].url} />
        <RightButton position="top" onClick={handleNextClick} />
      </W.ImageWrapper>
      <W.DeveloperWrapper>
        <W.TeamItem>
          <W.TeamTitle>{data.teamName}</W.TeamTitle>
          <W.LinkTo>
            <a href={data.instagramUrl}>
              <img src={Instagram} alt="instagram" />
            </a>
            <a href={data.githubUrl}>
              <img src={Github} alt="github" />
            </a>
          </W.LinkTo>
        </W.TeamItem>
        {data.developers.map((d) => (
          <Developer key={d.name} name={d.name} role={d.role} />
        ))}
        <W.DetailDescription>
          <div style={{ whiteSpace: 'pre-line' }}>
            {data.description}
          </div>
          <W.Spacer />
        </W.DetailDescription>
      </W.DeveloperWrapper>
    </W.WorkIntroduceContainer>
  );
}

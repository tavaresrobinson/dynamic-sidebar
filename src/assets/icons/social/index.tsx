import React from 'react';
import Icon from '@ant-design/icons';
import {ReactComponent as FacebookSVG} from 'assets/svg/Facebook.svg';
import {ReactComponent as InstagramSVG} from 'assets/svg/Instagram.svg';
import {ReactComponent as LinkedInSVG} from 'assets/svg/LinkedIn.svg';
import {ReactComponent as SnapshotSVG} from 'assets/svg/Snapshot.svg';
import {ReactComponent as TwitterSVG} from 'assets/svg/Twitter.svg';

export const FacebookIcon = (props: any) => (
  <Icon component={FacebookSVG} {...props} />
);

export const InstagramIcon = (props: any) => (
  <Icon component={InstagramSVG} {...props} />
);

export const SnapshotIcon = (props: any) => (
  <Icon component={SnapshotSVG} {...props} />
);

export const LinkedInIcon = (props: any) => (
  <Icon component={LinkedInSVG} {...props} />
);

export const TwitterIcon = (props: any) => (
  <Icon component={TwitterSVG} {...props} />
);

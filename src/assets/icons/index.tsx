import React from 'react';
import Icon from '@ant-design/icons';
import {ReactComponent as ProfileSVG} from 'assets/svg/Profile.svg';
import {ReactComponent as LogoutSVG} from 'assets/svg/Logout.svg';
import {ReactComponent as SISVG} from 'assets/svg/_SI.svg';
import {ReactComponent as MapPinSVG} from 'assets/svg/map-pin.svg';
import {ReactComponent as EmailConfSVG} from 'assets/svg/email-conf.svg';

export const Logo = (props: any) => (
  <Icon component={SISVG} {...props} />
);

export const ProfileIcon = (props: any) => (
  <Icon component={ProfileSVG} {...props} />
);

export const LogoutIcon = (props: any) => (
  <Icon component={LogoutSVG} {...props} />
);

export const MapPinIcon = (props: any) => (
  <Icon component={MapPinSVG} {...props} />
);

export const EmailConfIcon = (props: any) => (
  <Icon component={EmailConfSVG} {...props} />
);

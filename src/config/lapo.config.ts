import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';
import WebFont from 'webfontloader';
import * as themes from './themes';

WebFont.load({
  google: {
    families: ['Roboto: 300, 400, 500, 700', 'Nunito: 300, 400, 500, 600, 700']
  }
});

type LapoVariants<T> = Stitches.VariantProps<T>;
type PropertyValue<T extends keyof Stitches.CSSProperties> =
  | Stitches.PropertyValue<T>
  | Stitches.ScaleValue<T>
  | string
  | number;

const lapo = createStitches({
  prefix: 'lapo-',
  theme: themes.blueLightTheme,
  media: {
    initial: '(min-width: 0px)',
    small: '(min-width: 576px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 992px)',
    extraLarge: '(min-width: 1200px)'
  },
  utils: {
    p: (value: PropertyValue<'padding'>) => ({ padding: value }),
    pt: (value: PropertyValue<'paddingTop'>) => ({ paddingTop: value }),
    pr: (value: PropertyValue<'paddingRight'>) => ({ paddingRight: value }),
    pb: (value: PropertyValue<'paddingBottom'>) => ({ paddingBottom: value }),
    pl: (value: PropertyValue<'paddingLeft'>) => ({ paddingLeft: value }),
    px: (value: PropertyValue<'padding'>) => ({ paddingLeft: value, paddingRight: value }),
    py: (value: PropertyValue<'padding'>) => ({ paddingTop: value, paddingBottom: value }),
    m: (value: PropertyValue<'margin'>) => ({ margin: value }),
    mt: (value: PropertyValue<'marginTop'>) => ({ marginTop: value }),
    mr: (value: PropertyValue<'marginRight'>) => ({ marginRight: value }),
    mb: (value: PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
    ml: (value: PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
    mx: (value: PropertyValue<'margin'>) => ({ marginLeft: value, marginRight: value }),
    my: (value: PropertyValue<'margin'>) => ({ marginTop: value, marginBottom: value }),
    ta: (value: PropertyValue<'textAlign'>) => ({ textAlign: value }),
    fd: (value: PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
    ai: (value: PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: PropertyValue<'flexBasis'>) => ({ flexBasis: value }),
    bc: (value: PropertyValue<'backgroundColor'>) => ({ backgroundColor: value }),
    br: (value: PropertyValue<'borderRadius'>) => ({ borderRadius: value }),
    btrr: (value: PropertyValue<'borderTopRightRadius'>) => ({ borderTopRightRadius: value }),
    bbrr: (value: PropertyValue<'borderBottomRightRadius'>) => ({ borderBottomRightRadius: value }),
    bblr: (value: PropertyValue<'borderBottomLeftRadius'>) => ({ borderBottomLeftRadius: value }),
    btlr: (value: PropertyValue<'borderTopLeftRadius'>) => ({ borderTopLeftRadius: value })
  }
});

const { config, css, getCssText, globalCss, keyframes, styled, theme } = lapo;
const createTheme = lapo.createTheme;

type CSS = Stitches.CSS<typeof config>;
type ComponentCSSProp = { css?: CSS; as?: React.ElementType };
type Theme = ReturnType<typeof createTheme>;
const blueLightTheme = createTheme('blue-light-theme', themes.blueLightTheme);
const blueDarkTheme = createTheme('blue-dark-theme', themes.blueDarkTheme);

const Reset: CSS = {
  appearance: 'none',
  boxSizing: 'border-box',
  margin: '0',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box'
  },
  '&::after': {
    boxSizing: 'border-box'
  }
};

export {
  CSS,
  ComponentCSSProp,
  LapoVariants,
  PropertyValue,
  Theme,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  config,
  blueDarkTheme,
  blueLightTheme,
  lapo,
  theme,
  Reset
};

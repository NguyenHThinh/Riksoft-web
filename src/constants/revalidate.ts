export const TIME_REVALIDATE = {
  HOUR: 3600,
  HALFHOUR: 1800,
  TENMINUTE: 600,
  DAY: 86400,
  FIVEMITUTE: 300,
};

export const PAGE_REVALIDATE = {
  HOME: TIME_REVALIDATE.HALFHOUR,
  PROJECTS: TIME_REVALIDATE.HOUR,
  DETAIL_POST: TIME_REVALIDATE.FIVEMITUTE,
  DETAIL_PROJECT: TIME_REVALIDATE.FIVEMITUTE,
  SERVICES: TIME_REVALIDATE.TENMINUTE,
  ABOUT: TIME_REVALIDATE.HOUR,
};
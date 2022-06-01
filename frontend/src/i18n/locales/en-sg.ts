import Translation from './types'

export const enSG: Translation = {
  translation: {
    features: {
      login: {
        LoginPage: {
          slogan: 'Build secure government forms in minutes',
        },
        components: {
          LoginForm: {
            onlyAvailableForPublicOfficers:
              'Only available for use by public officers with a gov.sg email',
            email: 'Email',
            emailEmptyErrorMsg: 'Please enter an email address',
            login: 'Log in',
            haveAQuestion: 'Have a question?',
          },
        },
      },
    },
  },
}

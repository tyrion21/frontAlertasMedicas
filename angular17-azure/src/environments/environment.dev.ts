export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: '8adc0981-404b-4a15-b731-2a639b416e0f',
      // clientId: 'b5c2e510-4a17-4feb-b219-e55aa5b74144',
      authority:
        'https://login.microsoftonline.com/269689f1-20f3-4239-8260-370e115a5d03',
    },
  },
  apiConfig: {
    scopes: ['user.read'],
    uri: 'https://graph.microsoft.com/v1.0/me',
  },
};

interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise(res => {
    setTimeout(() => {
      // fake token
      res({
        token:
          'sdfaoi16w4fsd3af132vcx8q5d11sdd2f321ww8x2z1vx3218awva31v3a2s11a2sf1sd3',
        user: {
          name: 'Fernando',
          email: 'fernandochaves@email.com',
        },
      });
    }, 2000);
  });
}

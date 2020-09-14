const mapStateToProps = (state) => {
  const { account } = state;
  return {
    store: {
      token: account.token,
      config: account.config,
      account: account.account,
      hackers: account.hackers,
      users: account.users,
      roles: account.roles,
      interactions: account.interactions,
      loaded: account.loaded,
    },
  };
};

export default mapStateToProps;

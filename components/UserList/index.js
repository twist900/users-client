import React, { Component } from 'react';
import { Card, Button, Grid, Loader } from 'semantic-ui-react';
import Head from 'next/head';
import FormModal from '../FormModal';
import UserForm from '../UserForm';
import { fetchUsers, deleteUser } from '../../actions';
import { withRouter } from 'next/router';
import { resetNewUser, createUser } from '../../actions';

class UserList extends Component {
  state = {
    modalOpen: false
  };

  componentWillReceiveProps = nextProps => {
    const { users } = nextProps;
    const { newUser } = users;

    if (this.props.users.newUser.loading && !newUser.loading && !newUser.error) {
      this.setState({ ...this.state, modalOpen: false });
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  onAddUser = () => {
    this.props.dispatch(resetNewUser());

    this.setState({
      ...this.state,
      modalOpen: !this.state.modalOpen
    });
  };

  render() {
    const { users, dispatch } = this.props;
    const { loading, list, newUser } = users;

    return (
      <div>
        <Head>
          <title>Users</title>
        </Head>
        <Grid columns="3">
          <Grid.Row>
            <Button
              onClick={() => {}}
              color="green"
              size="mini"
              style={{ marginLeft: '1rem' }}
              onClick={this.onAddUser}
            >
              Add User
            </Button>
            <FormModal
              open={this.state.modalOpen}
              onClose={() =>
                this.setState({
                  ...this.state,
                  modalOpen: !this.state.modalOpen
                })
              }
              header="Create User"
            >
              <UserForm
                submit={user => {
                  this.props.dispatch(createUser(user));
                }}
                serverError={newUser.error}
                loading={newUser.loading}
              />
            </FormModal>
          </Grid.Row>

          {list &&
            list.map(user => (
              <Grid.Column>
                <Card>
                  <Card.Content>
                    <Card.Header>{user.attributes.name}</Card.Header>
                    <Card.Meta>{user.attributes['phone-number']}</Card.Meta>
                    <Card.Description>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button
                      onClick={() => dispatch(deleteUser(user.id))}
                      floated="right"
                      basic
                      color="red"
                      content="black"
                      size="mini"
                    >
                      Delete
                    </Button>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))}
          <Loader size="massive">Loading Users</Loader>
        </Grid>
      </div>
    );
  }
}

export default withRouter(UserList);

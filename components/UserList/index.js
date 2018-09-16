import React, { Component } from 'react';
import { Card, Button, Grid, Segment, Dimmer, Loader, GridRow } from 'semantic-ui-react';
import Head from 'next/head';
import { fetchUsers, deleteUser } from '../../actions';
import { withRouter } from 'next/router';

class UserList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  render() {
    const { router, users, dispatch } = this.props;
    const { loading, list } = users;
    console.log(users.list);

    return (
      <div>
        <Head>
          <title>Users</title>
        </Head>
        <Grid columns="3">
          <Grid.Row>
            <Button
              position="right"
              onClick={() => {}}
              color="green"
              size="mini"
              style={{ marginLeft: '1rem' }}
              onClick={() => {}}
            >
              Add User
            </Button>
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
                    <Button floated="right" size="mini">
                      Edit
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

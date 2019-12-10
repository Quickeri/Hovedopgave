import React from 'react';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import css from './sideNav.scss';

const GET_SHOW_SIDEBAR = gql`
{
showSideBar @client
}`;

const SideNav = () => {
    const client = useApolloClient();
    const { data: { showSideBar }, error } = useQuery(GET_SHOW_SIDEBAR);
    if (error) return console.log(error) || error;
    return (
        <div>
            <button
                className={css['button-test']}
                onClick={() => {
                    client.writeData({
                        data: {
                            showSideBar: !showSideBar,
                        },
                    });
                }}
            >
                Toggle sidenav
            </button>
            {showSideBar && <div className={css['onclick-text']}>this is the side nav HUSSAR</div>}
        </div>
    );
};

export default SideNav;

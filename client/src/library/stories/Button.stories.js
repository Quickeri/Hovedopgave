import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import Button from '../components/button/Button';

storiesOf('Button', module)
    .add('All Buttons', () => (
        <div>
            <Button size="mini" className="primary">
                Mini
            </Button>
            <Button size="tiny" className="info">
                Tiny
            </Button>
            <Button size="small" className="warning">
                Small
            </Button>
            <Button size="medium">Medium</Button>
            <Button
                size="large"
                className="negative"
                fontColor="blue"
            >
                Large
            </Button>
            <Button size="xlarge" className="positive">
                Xlarge
            </Button>
            <Button size="huge" className="secondary" basic>
                Huge
            </Button>
            <Button size="giga" className="secondary" disabled>
                Giga
            </Button>
        </div>
    ))
    .add('mini', () => (
        <Button size="mini" className="info">
            Tiny
        </Button>
    ))
    .add('tiny', () => (
        <Button size="tiny" className="info">
            Tiny
        </Button>
    ))
    .add('small', () => (
        <Button size="small" className="warning">
            Small
        </Button>
    ))
    .add('medium', () => <Button size="medium">Medium</Button>)
    .add('large', () => (
        <Button size="large" className="negative" fontColor="blue">
            Large
        </Button>
    ))
    .add('xlarge', () => (
        <Button size="xlarge" className="positive">
            Xlarge
        </Button>
    ))
    .add('huge', () => (
        <Button size="huge" className="secondary">
            Huge
        </Button>
    ))
    .add('GIGA', () => (
        <Button size="giga" className="secondary">
            Giga
        </Button>
    ))
    .add('standard button', () => <Button>Standard</Button>);

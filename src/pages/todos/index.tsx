import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Button, Card } from 'antd';
import type { CardMetaProps, CardProps } from 'antd';
import { useStyles, stylesCard } from './styles/style';
import { useEffect } from 'react';
import { useTodoActions, useTodoState } from '../../providers/todoProvider';
import { ITodo } from '../../providers/todoProvider/context';

const { Meta } = Card;


const actions = [
    <EditOutlined key="edit" style={{ color: '#45b7d1' }} />,
    <DeleteOutlined key="delete" style={{ color: '#ff6b6b' }} />,
];

const App: React.FC = () => {
    const { styles: classNames } = useStyles();
    const { todos, isPending, isError } = useTodoState();
    const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = useTodoActions();

    useEffect(() => {
        getTodos();
    }, []);

    if (isPending) {
        return <div>Loading Todos...</div>;
    }

    if (isError) {
        return <div>Error loading Todos. Please try again later.</div>;
    }

    if (!todos || todos.length === 0) {
        return <div>No Todos found.</div>;
    }

    const sharedCardProps: CardProps = {
        classNames,
        actions,
    };

    const sharedCardMetaProps: CardMetaProps = {
        avatar: <Avatar src={`${import.meta.env.VITE_API_AVATAR_URL}${Math.floor(Math.random() * 1000)}`} />,
    };

    return (
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: 16, boxSizing: 'border-box', display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {todos?.map((todo: ITodo) => (
                <Card key={todo.id}
                    {...sharedCardProps}
                    title={todo.id}
                    styles={stylesCard}
                    extra={<Button type="link">More</Button>}
                    variant="borderless"

                >
                    <Meta {...sharedCardMetaProps} title={todo.todo} />
                </Card>
            ))}
        </div>
    );
};

export default App;
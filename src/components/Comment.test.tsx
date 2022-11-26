import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { IComment } from '../types/interfaces'
import Comment from './Comment'
import { BrowserRouter as Router } from 'react-router-dom'

test('comment content', () => {
    const comment: IComment = {
        name: 'test',
        email: 'testComment@test.com',
        body: 'comentario para testear'
    }

    render(
        <Router>
            <Comment comment={comment} />
        </Router>
    )

    const element = screen.getByText('comentario para testear')
    expect(element).toBeDefined()
})
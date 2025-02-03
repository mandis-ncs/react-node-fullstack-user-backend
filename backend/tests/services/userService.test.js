import userService from '../services/userService.js'
import userRepository from '../repository/userRepository.js'
import { ApiError } from '../middlewares/errorHandler.js'
import sinon from 'sinon'

describe('User Service Tests', () => {
    let userRepositoryMock

    beforeEach(() => {
        userRepositoryMock = sinon.stub(userRepository) // Mockando o repositório
    })

    afterEach(() => {
        sinon.restore() // Restaurar para não vazar mocks
    })

    test('Should create a new user successfully', async () => {
        const newUser = { name: 'John Doe', email: 'john@example.com' }

        userRepositoryMock.findAll.resolves([]) // Simula usuário inexistente
        userRepositoryMock.create.resolves({ id: 1, ...newUser }) // Simula criação

        const result = await userService.createUser(newUser)

        expect(result).toEqual({ id: 1, ...newUser })
        expect(userRepositoryMock.findAll.calledOnce).toBeTruthy()
        expect(userRepositoryMock.create.calledOnce).toBeTruthy()
    })

    test('Should not create a user if email already exists', async () => {
        const existingUser = { id: 1, name: 'Jane Doe', email: 'jane@example.com' }

        userRepositoryMock.findAll.resolves([existingUser]) // Simula usuário existente

        await expect(userService.createUser({ email: 'jane@example.com' }))
            .rejects.toThrow(new ApiError(409, 'User already exists'))

        expect(userRepositoryMock.findAll.calledOnce).toBeTruthy()
        expect(userRepositoryMock.create.notCalled).toBeTruthy()
    })

    test('Should update a user successfully', async () => {
        const updatedUser = { name: 'Jane Updated' }

        userRepositoryMock.update.resolves({ id: 1, ...updatedUser }) // Simula atualização

        const result = await userService.updateUser(1, updatedUser)

        expect(result).toEqual({ id: 1, ...updatedUser })
        expect(userRepositoryMock.update.calledOnce).toBeTruthy()
    })

    test('Should delete a user successfully', async () => {
        userRepositoryMock.delete.resolves(true) // Simula exclusão

        const result = await userService.deleteUser(1)

        expect(result).toBeTruthy()
        expect(userRepositoryMock.delete.calledOnce).toBeTruthy()
    })

    test('Should find a user by ID', async () => {
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' }

        userRepositoryMock.findById.resolves(user) // Simula busca

        const result = await userService.findUser(1)

        expect(result).toEqual(user)
        expect(userRepositoryMock.findById.calledOnce).toBeTruthy()
    })

    test('Should return all users based on filters', async () => {
        const users = [
            { id: 1, name: 'User One' },
            { id: 2, name: 'User Two' }
        ]

        userRepositoryMock.findAll.resolves(users) // Simula busca

        const result = await userService.findAllUsers({})

        expect(result).toEqual(users)
        expect(userRepositoryMock.findAll.calledOnce).toBeTruthy()
    })
})

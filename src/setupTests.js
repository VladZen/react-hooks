import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import '@testing-library/jest-dom/extend-expect'

global.axiosMock = () => new MockAdapter(axios)

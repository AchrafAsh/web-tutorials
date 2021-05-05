import React, {FC } from 'react'

const Template: FC = ({ children }) => {
    return (
        <body>
            <table>
                <tr>
                    <td>
                        {children}
                    </td>
                </tr>
            </table>
        </body>
    )
}

const Email = () => {
    return (
        <table>
            <tr>
                <td>Hello table</td>
            </tr>
            <tr>
                <td>It works!!</td>
            </tr>
        </table>
    )
}

export default () => <Template><Email /></Template>
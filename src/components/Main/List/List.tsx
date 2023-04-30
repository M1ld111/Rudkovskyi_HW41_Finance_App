    import React, { useContext } from 'react'
    import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, Paper } from '@mui/material'
    import { Delete, MoneyOff } from '@mui/icons-material'
    // import { ExpenseTrackerContext } from '../../../context/context'


    const List = () => {

        // const { deleteTransaction } = useContext(ExpenseTrackerContext);

        const transactions = [
            { id: 1, 
                type: 'Income', 
                category: 'Salary',
                amount: 50,
                date: 'Wed Dec 16'
            },
            { id: 2, 
                type: 'Expense', 
                category: 'Pets',
                amount: 10,
                date: 'Wed Dec 16'
            },
            { id: 3, 
                type: 'Income', 
                category: 'Salary',
                amount: 550,
                date: 'Wed Dec 16'
            },
            { id: 4, 
                type: 'Income', 
                category: 'Salary',
                amount: 50,
                date: 'Wed Dec 16'
            },
            { id: 5, 
                type: 'Expense', 
                category: 'Pets',
                amount: 10,
                date: 'Wed Dec 16'
            },
            { id: 6, 
                type: 'Income', 
                category: 'Salary',
                amount: 550,
                date: 'Wed Dec 16'
            },
            { id: 7, 
                type: 'Expense', 
                category: 'Pets',
                amount: 10,
                date: 'Wed Dec 16'
            },
            { id: 8, 
                type: 'Income', 
                category: 'Salary',
                amount: 550,
                date: 'Wed Dec 16'
            }
        ];

    return (
        <Paper style={{ maxHeight: '100%', overflow: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
            <MUIList dense={false}>
                {transactions.map((transaction) => (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: transaction.type === 'Income' ? 'rgba(0, 205, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)' }}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText style={{color: 'rgba(205, 205, 205, 1)'}} primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} secondaryTypographyProps={{ style: { color: 'rgba(205, 205, 205, 1)' } }} />
                            <ListItemSecondaryAction>
                                <IconButton edge='end' aria-label='delete' style={{backgroundColor:'rgba(205, 205, 205, 0.8)'}}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))}
            </MUIList>
        </Paper>
    )
    }

    export default List

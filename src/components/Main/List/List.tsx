    import React, { useContext } from 'react'
    import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide, Paper } from '@mui/material'
    import { Delete, MoneyOff } from '@mui/icons-material'
    import { ExpenseTrackerContext } from '../../../context/context'


    const List = () => {

        const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

        interface Transaction {
            id: number;
            type: string;
            category: string;
            amount: number;
            date: string;
          }


    return (
        <Paper style={{ maxHeight: '100%', overflow: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.3)'}}>
            <MUIList dense={false}>
                {transactions.map((transaction: Transaction) => (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar style={{ backgroundColor: transaction.type === 'Income' ? 'rgba(0, 205, 0, 0.8)' : 'rgba(255, 0, 0, 0.8)' }}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText style={{color: 'rgba(205, 205, 205, 1)'}} primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} secondaryTypographyProps={{ style: { color: 'rgba(205, 205, 205, 1)' } }} />
                            <ListItemSecondaryAction>
                                <IconButton edge='end' aria-label='delete' onClick={() => deleteTransaction(transaction.id)} style={{backgroundColor:'rgba(205, 205, 205, 0.8)'}}>
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

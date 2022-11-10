```Python
def get_task( important = False ): 
    prompt = (
        input('How high of a priority is your task? (1-10): ')
        if     important
        else   None
    )
    return(
        print('\nSorry, I\'m busy with a higher priority task. Please try again later...')
        if     not important
        else   get_task()
    )
 
 
 if __name__ == "__main__":
 
    prompt = input('Do you have a task for me to complete? (y/n): ')
    priority = True if prompt == 'y' else False

    print('\nExcellent news! Have a nice day.') if not priority else get_task( priority ) 
```

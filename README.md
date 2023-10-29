## A little about me:
> ### **[harry](https://en.wiktionary.org/wiki/harry)**  
> **verb**   
> (*third-person singular simple present **harries**, present participle **harrying**, simple past and past participle **harried***) (*transitive*)   
>    
> 1. To plunder, pillage, assault.
> 2. To make repeated attacks on an enemy.
> 3. To strip, lay waste, ravage. 
> 4. To harass, bother or distress with demands, threats, or criticism. 

<br>

## Here's a look at today's agenda:
![ufukkedup](https://media.giphy.com/media/8XCbHhGQB5VXG/giphy.gif)

<br>

## Questions? Comments? Concerns? Run the following script:
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
 
 
prompt   =  input('Do you have a task for me to complete? (y/n): ')
priority =  True if prompt == 'y' else False

print('\nExcellent news! Have a nice day.') if not priority else get_task( priority ) 
```


> ### **Verb**  
> **harry**   
> (*third-person singular simple present **harries**, present participle **harrying**, simple past and past participle **harried***) (*transitive*)   
   
1. To plunder, pillage, assault.
2. To make repeated attacks on an enemy.
3. To strip, lay waste, ravage. 
4. To harass, bother or distress with demands, threats, or criticism. 



## This is how I'm feeling today:

![ufukkedup](https://media.giphy.com/media/HsXfypimWpPcQ/giphy.gif)   ![ufukkedup](https://media.giphy.com/media/HsXfypimWpPcQ/giphy.gif)   ![ufukkedup](https://media.giphy.com/media/HsXfypimWpPcQ/giphy.gif)

<br>

## Do you have a task for me to complete?
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
 
    prompt   =  input('Do you have a task for me to complete? (y/n): ')
    priority =  True if prompt == 'y' else False

    print('\nExcellent news! Have a nice day.') if not priority else get_task( priority ) 
```

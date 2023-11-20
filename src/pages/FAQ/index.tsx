// Local imports
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

// Component definition
function FAQ() {
  return (
    <Stack fontFamily={'Arial'}
      spacing={4}
      pt={2} pl={{xs: 2, sx: 2, sm: 2, md: 8, lg: 10}} pr={{xs: 2, sx: 2, sm: 2, md: 8, lg: 10}}
      justifyContent={'center'} textAlign={'center'} width={'100%'}>
    <QuestionAnswer
      question='What happens if the current political system does not support or even hinders the implementation of such a model?'
      answer='Fortunately, the introduction of this model should begin on a small scale, at the level of local, smaller communities. It does not require legal or legislative support; a balanced-voting-system-like platform and the votes organized on it can be implemented by a city mayor simply by creating the necessary technical (IT) infrastructure. If the current mayor or prime minister is not willing to introduce this model, it can still be promoted and implemented from an opposition position as a political program point.'
    />
    <QuestionAnswer
      question='Why is it beneficial for voters to read opinion articles from various political parties, experts, etc., related to the topic of the vote?'
      answer='This aspect is a crucial pillar of the model. Every cast vote expresses an intent or opinion that can impact the life of a country or a smaller community (city, town). The essence of the model is to assign trust credits behind each vote, regardless of the topic. These credits are derived from being informed, knowledgeable, and unbiased, which is facilitated by reading opinion articles. As a result, society, the community, and its leaders can be confident that those who vote, and the high value represented by their vote, are citizens who have thoroughly and diligently explored the topic before expressing their will (voting). This critical trust factor is the foundation and essential essence of this model.'
    />
    <QuestionAnswer
      question='How does society and the specific community benefit from the implementation of the weighted voting model?'
      answer='The introduction of such a system will bring numerous positive effects. Every member of society will be motivated and interested in being part of the collective, constructive effort. It eliminates the feeling of exclusion at the individual and collective (group) level, along with the reality bubble effect and similar negative patterns, replacing them with a creative, enthusiastic desire to contribute. The public and politicians will enter into a partnership relationship. The politician-to-politician dynamic will be characterized by sportsmanship-like behavior, radiating mutual respect, allowing them to primarily serve the people as both competitors and team members.'
    />
    <QuestionAnswer
      question=''
      answer=''
    />
    </Stack>
  );
}

function QuestionAnswer({question, answer}: {question: string, answer: string}) {
  return (
    <>
    <br/><br/>
    <h4 style={{fontSize: 'x-large', fontWeight: 'normal'}}>{question}</h4>
    <Typography variant="body2" color="text.secondary" component={'div'} textAlign={'left'}>
      {answer}
       <br/><br/>
    </Typography>
    </>
  );
}
// Default export
export default FAQ;

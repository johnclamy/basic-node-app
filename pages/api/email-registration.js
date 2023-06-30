import path from 'path'
import fs from 'fs'

function extractData(path) {
  const rslt = fs.readFileSync(path)
  const data = JSON.parse(rslt)
  return data
}

export default function handler(req, res) {
  const { method } = req
  const filePath = path.join(process.cwd(), 'data', 'index.json')
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    return res.status(404).json({
      status: 404,
      message: 'Events data not found'
    })
  }

  if (method === 'POST') {
    const { email, eventId } = req.body

    if (!email | !email.includes('@')) {
      res.status(422).json({
        message: 'Invalid email address'
      })
    }

    const registeredEvents = allEvents.map(event => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(409).json({
            message: "This email is already registered"
          });
          return event
        }
        return {
          ...event,
          emails_registered: [
            ...event.emails_registered,
            email
          ]
        }
      }
      return event
    })

    fs.writeFileSync(filePath, JSON.stringify({
      events_categories,
      allEvents: registeredEvents
    }))
    res.status(201).json({
      message: `${email} has been successfully registered for ${eventId} event`,
    });
  }
}

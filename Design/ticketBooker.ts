interface TicketBooker {
    theaters: Theater[];

    bookTicket: (user: User, ticket: Ticket) => void;
    cancelTicket: (user: User, ticket: Ticket) => boolean;
    getTheaters: (movieTitle: string) => Theater[];
    getShows: (theater: Theater) => Movie[]

    addTheater: (theater: Theater) => void;
    print: () => void;
}

interface Theater {
    name: string;
    halls: Hall[];

    addHall: (hall: Hall) => void;
    getShows: () =>  Movie[]
    hasShow: (movieTitle: string) => boolean

    print: () => void;
}

interface Hall {
    tickets: Ticket[]

    addTicket: (ticket: Ticket) => void
    getShows: () =>  Movie[]
    hasShow: (title: string) => boolean
    print: () => void;
}

interface Ticket {
    movieId: string;
    userId: string;
}

interface User {
    id: string;
}

interface Movie {
    title: string
    id: string;
}

class TicketBookerService implements TicketBooker {
    theaters: Theater[] = []

    bookTicket = (user: User, ticket: Ticket) => {
        ticket.userId = user.id;
    }

    cancelTicket = (user: User, ticket: Ticket): boolean => {
        if(ticket.userId !== user.id){
            return false
        }
        ticket.userId = ""
        return true;
    };

    getTheaters = ( movieTitle: string): Theater[] =>{
        const filteredTheaters = this.theaters.filter(theater => theater.hasShow(movieTitle))

        return filteredTheaters
    }


    getShows = (theater: Theater) => {
        return theater.getShows()
    }

    addTheater = (theater: Theater) => {
        this.theaters.push(theater)
    }

    print = () =>{
        console.log("Theater Ticketing Service")
        this.theaters.forEach(theater =>{
           theater.print()
        })
    }
}

class TheaterService implements Theater {
    name: string;
    halls: Hall[];


    constructor(name: string){
        this.name =name
    }

    addHall = (hall: Hall) => {
        this.halls.push(hall)
    }

    getShows = () => {
        const shows : Movie[] = []
        const titleSet = new Set()
        for(let i = 0; i < this.halls.length; i++){
            const hallShows : Movie[] = this.halls[i].getShows()
            for(let j = 0; j < hallShows.length; j++){
                const movie: Movie = hallShows[j]
                if(!titleSet.has(movie.title)){
                    shows.push(movie)
                    titleSet.add(movie.title)
                }
            }
        }

        return shows;
    }

    hasShow = (title: string) => {
        let i = 0;
        for(let i = 0; i < this.halls.length; i++){
            if(this.halls[i].hasShow(title)){
                return true
            }
        }   
        return false
    }

    print = () =>{
        console.log("Theater", this.name)
        for(let i = 0; i < this.halls.length; i++){
            this.halls[i].print()
        }
    }
}

class HallService implements Hall {
    tickets: Ticket[]

    getShows = () =>{
        const shows : Movie[] = []
        return shows

    }

    hasShow = (title: string)=>{
        for(let i = 0; i < this.tickets.length; i++){
            if(this.tickets[i].title === title){
                return true
            }
        }
        return false;
    }

    addTicket = (ticket: Ticket) => {
        this.tickets.push(ticket)
    }

    print = () =>{
        this.tickets.forEach(ticket=>{
            console.log("title", ticket.title, "userId", ticket.userId)
        })
    }


}

class TicketService implements Ticket {
    title: string;
    userId: string;

    constructor(title){
        this.title = title
    }
}


class UserService implements User {
    id: string;

    constructor(id: string){
        this.id = id
    }
}

class MovieService implements Movie {
    name: string

    constructor(name: string){
        this.name = name
    }
}

const ticketBooker = new TicketBookerService()
const angelika = new TheaterService("Angelika")
const amc = new TheaterService("AMC")
const hall1 = new HallService()
const hall2 = new HallService()

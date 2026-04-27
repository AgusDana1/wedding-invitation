import useCountdown from '../hooks/useCountdown';
import Container from '../components/Container';

export default function Countdown() {
    const time = useCountdown("2026-05-30");

    return (
        <>
        <section className='py-20 text-center'>
            <Container>
                <h2 className='text-3xl mb-6 text-[#d4af37]'>Countdown</h2>
                <div className='flex justify-center gap-6 text-xl'>
                    <div>{time.days}d</div>
                    <div>{time.hours}h</div>
                    <div>{time.minutes}m</div>
                    <div>{time.seconds}s</div>
                </div>
            </Container>
        </section>
        </>
    )
}
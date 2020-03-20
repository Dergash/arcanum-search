<script>
	import Skills from './Skills.svelte'
	import Table from './Table.svelte'
	import creatures from './data/creatures.js'

	const creatureColumns = [
		{ key: 'name', title: 'Name' },
		{ key: 'skill', title: 'Skill' },
		{ key: 'skill_level', title: 'Skill Level', type: 'number' },
		{ key: 'training', title: 'Training' }
	]

	$: creaturesWithSkills = creatures.reduce((prev, next) => {
		next.skills.forEach(skill => {
			prev.push({ name: next.name, skill: capitalize(skill.key), skill_level: skill.level, training: getDisplayedTraining(skill.training)})
		})
		return prev
	}, [])

	function getDisplayedTraining(training) {
		if (training === 'beginner') {
			return 'Apprentice'
		}
		if (training) {
			return capitalize(training)
		}
		return 'Untrained'
	}

	function capitalize(text) {
		return text[0].toUpperCase() + text.substr(1)
	}
</script>

<main>
	<Skills />
	<div class="card">
		<Table columns={creatureColumns} items={creaturesWithSkills} />
	</div>
</main>

<style>
	:global(body) {
		background-color: rgb(35, 35, 35);
		color: rgba(255, 255, 255, 0.63);
	}

	main {
		padding: 1em;
	}

	.card {
		background-color: rgb(40, 40, 40);
		color: rgba(255, 255, 255, 0.87);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>